# ✨ SkincareAPI — SaaS Provider untuk Data Skincare

**SkincareAPI** adalah aplikasi **Software as a Service (SaaS)** yang menyediakan data produk & bahan aktif (*ingredient*) skincare kepada pihak ketiga melalui **RESTful API** yang diautentikasi menggunakan **API Key**. Selain itu, tersedia **Dashboard Admin** berbasis JWT untuk mengelola (CRUD) data produk dan ingredient, serta men-generate API Key.

Proyek ini dibuat untuk memenuhi tugas akhir mata kuliah Pemrograman Web Service (PWS), dengan konsep serupa layanan seperti **OpenRouter** atau **OpenWeather API** — pengguna registrasi, login, generate API Key, lalu API Key tersebut dipakai aplikasi lain untuk mengambil data.

🔗 **Live Demo:** https://029-final-project-pws-program-saa-s.vercel.app

---

## 📋 Daftar Isi

- [Fitur Utama](#-fitur-utama)
- [Tech Stack](#-tech-stack)
- [Struktur Proyek](#-struktur-proyek)
- [Struktur Database](#-struktur-database)
- [Cara Menjalankan Secara Lokal](#-cara-menjalankan-secara-lokal)
- [Cara Login / Menggunakan Dashboard](#-cara-login--menggunakan-dashboard)
- [Dokumentasi API (Endpoints)](#-dokumentasi-api-endpoints)
- [Autentikasi](#-autentikasi)
- [Hasil Pengujian (Screenshot)](#-hasil-pengujian-screenshot)
- [Deployment](#-deployment)
- [Dokumen Laporan](#-dokumen-laporan)

---

## 🚀 Fitur Utama

| Fitur | Keterangan |
|---|---|
| 🔐 Autentikasi JWT | Register, Login, Logout untuk Admin/Developer |
| 🔑 API Key Management | Generate API Key unik per user untuk akses data SaaS |
| 📦 CRUD Produk | Tambah, lihat, ubah, hapus data produk skincare (dilindungi JWT) |
| 🧪 CRUD Ingredient | Tambah, lihat, ubah, hapus data bahan aktif skincare (dilindungi JWT) |
| 🌐 Endpoint Publik (SaaS) | `GET /api/saas/products` & `GET /api/saas/ingredients` — diakses pihak eksternal via header `x-api-key` |
| 📊 Data Kompleks | 4 tabel relasional (termasuk relasi many-to-many), 30 data ingredient & 50 data produk siap pakai |
| 🖥️ Dashboard Admin | UI sederhana untuk login, generate API key, dan kelola produk |
| ☁️ Cloud Database | PostgreSQL di Supabase (koneksi via connection pooler + SSL) |
| 🚀 Serverless Deployment | Ter-deploy penuh di Vercel |

---

## 🛠 Tech Stack

- **Backend Framework:** Express.js (v5)
- **Database:** PostgreSQL (hosting: Supabase)
- **ORM:** Sequelize + Sequelize CLI (migration & seeder)
- **Autentikasi:** JSON Web Token (`jsonwebtoken`) + `bcrypt` untuk hashing password
- **Upload File:** Multer (upload gambar produk)
- **Deployment:** Vercel (Serverless Functions)
- **Testing API:** Postman

---

## 📁 Struktur Proyek

```
program_SaaS/
├── config/
│   ├── config.js          # Konfigurasi koneksi DB (development & production)
│   └── db.js               # Helper koneksi & sinkronisasi database
├── controllers/
│   ├── authController.js       # Logic register, login, logout, generate API key
│   ├── productController.js    # Logic CRUD produk
│   └── ingredientController.js # Logic CRUD ingredient
├── middleware/
│   ├── authMiddleware.js       # Verifikasi JWT (verifyToken)
│   ├── apiKeyMiddleware.js     # Verifikasi x-api-key (verifyApiKey)
│   └── uploadMiddleware.js     # Konfigurasi upload gambar (Multer)
├── migrations/              # Migration Sequelize (struktur tabel)
├── models/
│   ├── index.js              # Inisialisasi Sequelize & load semua model
│   ├── user.js                # Model tabel Users
│   ├── product.js             # Model tabel Products (+ relasi belongsToMany Ingredient)
│   ├── ingredient.js          # Model tabel Ingredients (+ relasi belongsToMany Product)
│   └── productingredient.js   # Model tabel junction ProductIngredients
├── routes/
│   └── api.js                # Definisi seluruh endpoint API
├── seeders/                  # Seeder data awal (30 ingredient + 50 produk)
├── index.html                 # Frontend Dashboard Admin (vanilla JS)
├── index.js                   # Entry point Express app
├── vercel.json                 # Konfigurasi deployment Vercel
├── .env                        # Environment variables (tidak di-commit)
└── package.json
```

---

## 🗄 Struktur Database

Database terdiri dari **4 tabel**, termasuk satu tabel junction untuk relasi many-to-many antara Produk dan Ingredient.

| Tabel | Deskripsi |
|---|---|
| `Users` | Data akun admin/developer: username, email, password (hashed), role, apiKey |
| `Products` | Data produk skincare: nama, deskripsi, gambar, relasi ke admin pembuat |
| `Ingredients` | Data bahan aktif skincare: nama & manfaat |
| `ProductIngredients` | Tabel junction (many-to-many) yang menghubungkan Produk ↔ Ingredient |

Relasi lengkap dapat dilihat pada **ERD** di folder [`docs/erd.png`](docs/erd.png) dan dijelaskan detail di dokumen laporan.

**Data awal (seeder):**
- 30 data `Ingredients` (bahan aktif skincare umum seperti Niacinamide, Hyaluronic Acid, Retinol, dll.)
- 50 data `Products` (produk skincare dari berbagai brand fiktif dengan deskripsi lengkap)

---

## 💻 Cara Menjalankan Secara Lokal

### 1. Clone & install dependency

```bash
git clone <url-repo-ini>
cd program_SaaS
npm install
```

### 2. Siapkan file `.env`

Buat file `.env` di root project dengan isi berikut (sesuaikan dengan kredensial Supabase kamu sendiri):

```env
# Untuk koneksi langsung (development)
DB_USER=postgres
DB_PASS=your_password
DB_DATABASE=your_database
DB_HOST=db.xxxxxxxxxxxx.supabase.co
DB_PORT=5432
DB_DIALECT=postgres

# Untuk koneksi production (Vercel) — via Supabase connection pooler
POSTGRES_URL=postgres://postgres.xxxxxxxxxxxx:PASSWORD@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres

# JWT
JWT_SECRET=your_super_secret_key
JWT_EXPIRES=1d
```

> ⚠️ **Catatan penting:** koneksi ke Supabase **wajib SSL**. Konfigurasi SSL sudah diatur otomatis di `models/index.js` (`dialectOptions.ssl.rejectUnauthorized: false`) saat `NODE_ENV=production`. Jangan menambahkan `?sslmode=require` di connection string agar tidak konflik dengan konfigurasi tersebut.

### 3. Jalankan migration & seeder

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

Perintah ini membuat 4 tabel di database dan mengisinya dengan 30 ingredient + 50 produk.

### 4. Jalankan server

```bash
npm run dev      # dengan nodemon (auto-restart)
# atau
npm start        # tanpa nodemon
```

Server berjalan di `http://localhost:3000`. Buka di browser untuk mengakses Dashboard Admin.

---

## 🔑 Cara Login / Menggunakan Dashboard

1. **Buka aplikasi** di https://029-final-project-pws-program-saa-s.vercel.app (atau `http://localhost:3000` jika lokal).
2. Jika belum punya akun, **register** terlebih dahulu lewat endpoint `POST /api/register` (lihat contoh di bagian [Dokumentasi API](#-dokumentasi-api-endpoints)) — dashboard versi saat ini mengasumsikan akun sudah terdaftar.
3. Pada halaman **Login Admin**, masukkan:
   - **Email:** `admin@skincare.com`
   - **Password:** `admin123`

   *(kredensial contoh berdasarkan data yang di-register saat pengujian — sesuaikan dengan akun yang kamu buat sendiri)*
4. Klik **Masuk Dashboard**. Token JWT akan otomatis disimpan di sisi client (localStorage) dan digunakan untuk setiap request berikutnya.
5. Di dalam dashboard kamu bisa:
   - Klik **Generate API Key** untuk mendapatkan API Key baru (dipakai untuk endpoint publik `/api/saas/*`).
   - Menambahkan produk baru lewat form **Tambah Produk Baru**.
   - Melihat daftar katalog produk yang sudah tersimpan di database.

---

## 📡 Dokumentasi API (Endpoints)

Base URL production: `https://029-final-project-pws-program-saa-s.vercel.app/api`

### Autentikasi

| Method | Endpoint | Proteksi | Body |
|---|---|---|---|
| POST | `/register` | Publik | `{ "username", "email", "password", "role" }` |
| POST | `/login` | Publik | `{ "email", "password" }` → response berisi `token` |
| POST | `/generate-apikey` | JWT | - |
| POST | `/logout` | JWT | - |

### CRUD Produk & Ingredient (Dashboard Admin — dilindungi JWT)

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/products` | Ambil semua produk (beserta relasi ingredient) |
| POST | `/products` | Tambah produk baru (mendukung upload gambar) |
| PUT | `/products/:id` | Update produk |
| DELETE | `/products/:id` | Hapus produk |
| GET | `/ingredients` | Ambil semua ingredient |
| POST | `/ingredients` | Tambah ingredient baru |
| PUT | `/ingredients/:id` | Update ingredient |
| DELETE | `/ingredients/:id` | Hapus ingredient |

### Endpoint SaaS (Publik — dilindungi API Key)

| Method | Endpoint | Header wajib |
|---|---|---|
| GET | `/saas/products` | `x-api-key: <API_KEY>` |
| GET | `/saas/ingredients` | `x-api-key: <API_KEY>` |

Ini adalah endpoint utama yang **diperjualbelikan** sebagai layanan SaaS — pihak eksternal cukup punya API Key untuk mengambil data produk & ingredient skincare tanpa perlu login JWT.

---

## 🔒 Autentikasi

Proyek ini menerapkan **dua lapis autentikasi** sesuai kebutuhan masing-masing jenis pengguna:

1. **JWT (JSON Web Token)** — untuk Admin/Developer yang mengelola data lewat Dashboard.
   - Token didapat dari `POST /api/login`, berlaku 1 hari (`JWT_EXPIRES=1d`).
   - Dikirim lewat header: `Authorization: Bearer <token>`.
2. **API Key** — untuk aplikasi pihak ketiga (API Consumer) yang hanya perlu **membaca** data produk/ingredient.
   - Didapat dari `POST /api/generate-apikey` (butuh JWT terlebih dahulu).
   - Dikirim lewat header: `x-api-key: <api_key>`.

---

## 📸 Hasil Pengujian (Screenshot)

Berikut bukti pengujian end-to-end aplikasi, mulai dari deployment hingga seluruh endpoint berjalan normal.

### 1. Deployment Vercel — Status Ready
<img width="1920" height="1080" alt="ds vercel" src="https://github.com/user-attachments/assets/7ff2c4ad-8a9e-4f82-a679-04f01eaea933" />

### 2. Halaman Login Dashboard
<img width="1920" height="1080" alt="ds vercel2" src="https://github.com/user-attachments/assets/af30527f-2e7d-4f23-a13d-d6c10ca8e3d5" />

### 3. POST `/api/register` — Registrasi berhasil (201 Created)
<img width="1920" height="1080" alt="POST REGIST" src="https://github.com/user-attachments/assets/2e573437-9af0-4499-b0f6-94be230ae982" />

### 4. POST `/api/login` — Login berhasil, token JWT diterima (200 OK)
<img width="1920" height="1080" alt="POST LOGIN" src="https://github.com/user-attachments/assets/f2c854eb-e1bb-4142-82b9-4433ad807e3d" />

### 5. POST `/api/generate-apikey` — API Key berhasil digenerate (200 OK)
<img width="1920" height="1080" alt="POST GENERATE API" src="https://github.com/user-attachments/assets/8b0793b3-0672-47d3-9252-13d7770c1874" />

### 6. GET `/api/products` — Data produk berhasil diambil dengan JWT (200 OK)
<img width="1920" height="1080" alt="GET PRODUK" src="https://github.com/user-attachments/assets/93be0d9d-0f09-4eae-8fb2-2795551d6ccb" />

### 7. GET `/api/saas/products` — Data produk berhasil diambil dengan API Key (200 OK)
<img width="1920" height="1080" alt="GET API KEY" src="https://github.com/user-attachments/assets/6f071744-3d8e-4732-b27c-7dbe1010a895" />

---

## ☁️ Deployment

Aplikasi ter-deploy sepenuhnya di **Vercel** sebagai serverless function (`vercel.json` mengarahkan seluruh route ke `index.js`), dengan database di-hosting di **Supabase** (PostgreSQL) menggunakan **connection pooler** (port 6543) agar kompatibel dengan lingkungan serverless.

**Environment Variables yang harus di-set di Vercel Dashboard** (Settings → Environment Variables):

| Key | Contoh Value |
|---|---|
| `POSTGRES_URL` | `postgres://user:pass@aws-0-xxx.pooler.supabase.com:6543/postgres` |
| `JWT_SECRET` | string rahasia bebas |
| `JWT_EXPIRES` | `1d` |

> Migration & seeder **tidak** berjalan otomatis saat deploy ke Vercel — keduanya dijalankan **manual sekali** dari komputer developer (`npx sequelize-cli db:migrate` & `db:seed:all`) dengan environment variable `NODE_ENV=production` dan `POSTGRES_URL` yang sama seperti di Vercel, agar tabel & data awal terbentuk di database production.

---

## 📄 Dokumen Laporan

Laporan lengkap (penjelasan sistem, ERD, Use Case Diagram, dan Activity Diagram/User Flow) tersedia di:
📎 https://drive.google.com/drive/folders/1qL6tTC8HRf8TPz4OpL-Y5zPtxFxmQ285?usp=drive_link

---

**SkincareAPI SaaS Project** — Universitas Muhammadiyah Yogyakarta
