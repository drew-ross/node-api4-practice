require('dotenv').config();
const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'hello from code';
  res.status(200).json({ message });
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log('server running...'));