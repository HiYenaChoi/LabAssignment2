// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// 새 제품 만들기
router.post('/products', productController.create);

// 읽기, 업데이트, 삭제에 대한 다른 라우트를 추가합니다.

module.exports = router
