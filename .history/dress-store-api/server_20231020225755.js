const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect('mongodb://localhost/DressStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// 루트 엔드포인트 설정
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application' });
});

// 컨트롤러 함수 정의
const createProduct = (req, res) => {
  // 제품 생성 로직
};

const getProductById = (req, res) => {
  // 특정 ID의 제품 조회 로직
};

const updateProduct = (req, res) => {
  // 제품 업데이트 로직
};

const deleteProduct = (req, res) => {
  // 제품 삭제 로직
};

// 라우트 정의
app.post('/api/products', createProduct);
app.get('/api/products/:id', getProductById);
app.put('/api/products/:id', updateProduct);
app.delete('/api/products/:id', deleteProduct);

// 서버 시작
app.listen(port, () => {
  console.log(`Dress Store server is running on port ${port}.`);
});
