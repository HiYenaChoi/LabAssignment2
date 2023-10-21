// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// 제품 생성 라우트
router.post('/products', productController.create);

// 다른 CRUD 작업에 대한 라우트 추가 가능

module.exports = router;
