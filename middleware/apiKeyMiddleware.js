const { User } = require('../models');

const verifyApiKey = async (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({ message: 'API Key wajib disertakan pada header (x-api-key)!' });
  }

  try {
    const user = await User.findOne({ where: { apiKey } });
    if (!user) {
      return res.status(403).json({ message: 'API Key tidak valid!' });
    }

    req.developer = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
};

module.exports = verifyApiKey;