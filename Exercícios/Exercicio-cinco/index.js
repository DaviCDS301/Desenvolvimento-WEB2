const express = require('express');
const app = express();

app.use(express.json());

const produtos = [
    {id: 1, nome: "Pudim", preco: 75},
    {id: 2, nome: "Pão", preco: 20},
    {id: 3, nome: "salgadinho", preco: 35}
];

app.get('/', (req, res) => {
    res.send('API funcionando!');
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);
  
    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }
  
    res.json(produto);
});

app.put("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const novosDados = req.body;

  const index = produtos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produtos[index] = {
    ...produtos[index],
    ...novosDados
  };

  res.json(produtos[index]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 