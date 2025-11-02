const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Service 2');
});

app.listen(port, () => {
  console.log(`Service 2 listening on port ${port}`);
});
