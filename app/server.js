'use strict';

const express = require('express');

// Constants
const PORT = process.env.NODE_PORT;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.join('./index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);