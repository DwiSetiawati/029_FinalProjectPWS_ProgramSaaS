const express = require('express');
const router = express.Router();

// Import Middleware
const verifyToken = require('../middleware/authMiddleware');
const verifyApiKey = require('../middleware/apiKeyMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Import Controllers
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');
const ingredientController = require('../controllers/ingredientController');

// --- ROUTES AUTH ---
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/generate-apikey', verifyToken, authController.generateApiKey);
router.post('/logout', verifyToken, authController.logout);

// --- ROUTES SAAS (GET Data dilindungi x-api-key) ---
router.get('/saas/products', verifyApiKey, productController.getAllProducts);
router.get('/saas/ingredients', verifyApiKey, ingredientController.getAllIngredients);

// --- ROUTES CRUD PRODUCTS (Dilindungi JWT) ---
router.get('/products', verifyToken, productController.getAllProducts);
router.post('/products', verifyToken, upload.single('gambar'), productController.createProduct);
router.put('/products/:id', verifyToken, upload.single('gambar'), productController.updateProduct);
router.delete('/products/:id', verifyToken, productController.removeProduct);

// --- ROUTES CRUD INGREDIENTS (Dilindungi JWT) ---
router.get('/ingredients', verifyToken, ingredientController.getAllIngredients);
router.post('/ingredients', verifyToken, ingredientController.createIngredient);
router.put('/ingredients/:id', verifyToken, ingredientController.updateIngredient);
router.delete('/ingredients/:id', verifyToken, ingredientController.removeIngredient);

module.exports = router;