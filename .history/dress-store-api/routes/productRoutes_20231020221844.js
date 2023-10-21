const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// 제품 생성
router.post('/', (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(product);
  });
});

// 모든 제품 조회
router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(products);
  });
});

// 다른 CRUD 작업을 추가하세요 (get by ID, update, delete)

module.exports = router;
