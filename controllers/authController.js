const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const JWT_SECRET = process.env.JWT_SECRET || 'rahasia_negara';

// Register User (Admin / Developer)
exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: role || 'Developer'
    });

    res.status(201).json({
      message: 'Registrasi berhasil!',
      data: { id: newUser.id, username: newUser.username, role: newUser.role }
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal register', error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Email tidak ditemukan!' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Password salah!' });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login berhasil!',
      token
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal login', error: error.message });
  }
};

// Generate API Key (Khusus Developer)
exports.generateApiKey = async (req, res) => {
  try {
    const userId = req.user.id;
    const apiKey = 'skincare_' + crypto.randomBytes(16).toString('hex');

    await User.update({ apiKey }, { where: { id: userId } });

    res.status(200).json({
      message: 'API Key berhasil digenerate!',
      apiKey
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal generate API Key', error: error.message });
  }
};

// Logout
exports.logout = async (req, res) => {
  // Karena menggunakan JWT stateless, logout ditangani di sisi client (hapus token).
  res.status(200).json({
    message: 'Logout berhasil! Silakan hapus token dari sisi client.'
  });
};