const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello mom');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
