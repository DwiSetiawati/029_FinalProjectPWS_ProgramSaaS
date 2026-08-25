const { Product, Ingredient } = require('../models');

// GET All Products (Bisa diakses publik lewat API Key SaaS)
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Ingredient, through: { attributes: [] } }]
    });
    res.status(200).json({ message: 'Berhasil ambil data produk', data: products });
  } catch (error) {
    res.status(500).json({ message: 'Gagal ambil data produk', error: error.message });
  }
};

// CREATE Product (Admin Only)
exports.createProduct = async (req, res) => {
  try {
    const { name, description, ingredientIds } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const adminId = req.user.id; // Catat ID admin sesuai ERD

    const product = await Product.create({
      name,
      description,
      imageUrl,
      adminId
    });

    // Jika ada relasi ingredient yang dikirim
    if (ingredientIds) {
      const ids = JSON.parse(ingredientIds);
      await product.setIngredients(ids);
    }

    res.status(201).json({ message: 'Produk berhasil ditambahkan!', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Gagal tambah produk', error: error.message });
  }
};

// UPDATE Product (Admin Only)
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, ingredientIds } = req.body;
    
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan!' });
    }

    const imageUrl = req.file ? `/uploads/${req.file.filename}` : product.imageUrl;

    await product.update({
      name,
      description,
      imageUrl
    });

    if (ingredientIds) {
      const ids = JSON.parse(ingredientIds);
      await product.setIngredients(ids);
    }

    res.status(200).json({ message: 'Produk berhasil diperbarui!', data: product });
  } catch (error) {
    res.status(500).json({ message: 'Gagal update produk', error: error.message });
  }
};

// REMOVE/DELETE Product (Admin Only)
exports.removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Produk tidak ditemukan!' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Produk berhasil dihapus!' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal hapus produk', error: error.message });
  }
};