const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Service 1');
});

app.listen(port, () => {
  console.log(`Service 1 listening on port ${port}`);
});
