const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.get('/login', (req, res) => {
  res.send('login');
});

const PORT = proccess.env.PORT || 5000;
app.listen(PORT);
