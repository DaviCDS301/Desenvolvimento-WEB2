const express = require('express');
const app = express();

app.use(express.json());

const produtos = [];

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {

    const produto = req.body;
  
    produtos.push(produto);
  
    res.status(201).json(produto);
  
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});