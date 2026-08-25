const { Ingredient } = require('../models');

// GET All Ingredients
exports.getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.status(200).json({ message: 'Berhasil ambil data ingredients', data: ingredients });
  } catch (error) {
    res.status(500).json({ message: 'Gagal ambil data ingredients', error: error.message });
  }
};

// CREATE Ingredient (Admin Only)
exports.createIngredient = async (req, res) => {
  try {
    const { name, benefits } = req.body;
    const ingredient = await Ingredient.create({ name, benefits });
    res.status(201).json({ message: 'Ingredient berhasil ditambahkan!', data: ingredient });
  } catch (error) {
    res.status(500).json({ message: 'Gagal tambah ingredient', error: error.message });
  }
};

// UPDATE Ingredient (Admin Only)
exports.updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, benefits } = req.body;

    const ingredient = await Ingredient.findByPk(id);
    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient tidak ditemukan!' });
    }

    await ingredient.update({ name, benefits });
    res.status(200).json({ message: 'Ingredient berhasil diperbarui!', data: ingredient });
  } catch (error) {
    res.status(500).json({ message: 'Gagal update ingredient', error: error.message });
  }
};

// REMOVE/DELETE Ingredient (Admin Only)
exports.removeIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await Ingredient.findByPk(id);
    
    if (!ingredient) {
      return res.status(404).json({ message: 'Ingredient tidak ditemukan!' });
    }

    await ingredient.destroy();
    res.status(200).json({ message: 'Ingredient berhasil dihapus!' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal hapus ingredient', error: error.message });
  }
};