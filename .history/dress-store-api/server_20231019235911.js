const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000; // 포트 설정

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect('mongodb+srv://yena:<9ow5tEIDUiOanVzF>@dressstore.ill0tpk.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 연결 오류:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// 루트 엔드포인트 설정
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application' });
});

// 기타 라우팅 및 컨트롤러 설정

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});
