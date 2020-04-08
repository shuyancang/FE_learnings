
const express = require('express');

const app = express();

app.get('/', (req, res, err) => {
  res.json({
    result: 123,
  })
})

app.listen(3000, () => {
  console.log('server is running');
})
