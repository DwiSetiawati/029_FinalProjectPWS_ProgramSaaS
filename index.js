const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Folder uploads untuk gambar produk
app.use('/uploads', express.static('uploads'));

// Panggil rute utama dari routes/api.js
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

/*
app.get('/', (req, res) => {
  res.status(200).json({ message: 'SkincareAPI SaaS berjalan dengan baik di Vercel!' });
});
*/

// Agar root URL (/) merender file index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Jalankan app.listen hanya saat dijalankan secara lokal (bukan di Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server lokal berhasil berjalan!`);
    console.log(`Akses website di: http://localhost:${PORT}`);
  });
}

// Wajib diekspor agar bisa dibaca sebagai serverless function oleh Vercel
module.exports = app;