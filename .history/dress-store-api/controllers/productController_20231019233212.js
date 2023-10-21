// controllers/productController.js
const Product = require('../models/product');

// CRUD 작업을 위한 컨트롤러 함수
// 예: 새 제품 만들기
exports.create = (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    published: req.body.published,
    category: req.body.category,
  });

  product.save((err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(data);
  });
};
// 다른 CRUD 작업을 위한 컨트롤러를 추가합니다 (읽기, 업데이트, 삭제).

