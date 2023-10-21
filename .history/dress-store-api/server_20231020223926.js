const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // 포트 설정

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

// 라우트 정의 부분
app.post('/api/products', createProduct);
app.get('/api/products/:id', getProductById);
app.put('/api/products/:id', updateProduct);
app.delete('/api/products/:id', deleteProduct);

// 기타 라우팅 및 컨트롤러 설정
// 여기에 /products 경로에 대한 라우트를 추가합니다.
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// 서버 시작
app.listen(port, () => {
  console.log(`Dress Store server is running on port ${port}.`);
});
