const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const SECRET = 'dev_secret_key';
const users = [
  { id: 1, username: 'admin', password: 'admin', role: 'admin' },
  { id: 2, username: 'student', password: 'student', role: 'user' }
];

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    u => u.username === username && u.password === password
  );
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  // Token expires in 1 hour
  const accessToken = jwt.sign(
    { id: user.id, username: user.username, role: user.role, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
    SECRET
  );
  res.json({
    accessToken,
    user: { id: user.id, username: user.username, role: user.role }
  });
});

app.listen(5174, () => {
  console.log('Mock Auth server running on http://localhost:5174');
});