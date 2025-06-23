import express from 'express';
import { ENV } from './config/env.js';

const app = express();
const PORT = ENV.PORT;

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
}
);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:5001');
}
);  