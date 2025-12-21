const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'AI Backend',
    timestamp: new Date().toISOString()
  });
});

// AI聊天端点
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    res.json({
      success: true,
      response: `AI回复测试: ${message}`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ AI Backend running on port ${PORT}`);
});
