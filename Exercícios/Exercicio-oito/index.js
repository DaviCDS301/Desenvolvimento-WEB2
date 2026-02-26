const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const produtos = [
    {id: 1, nome: "Harry Potter e o Cálice de fogo", preco: 75},
    {id: 2, nome: "Stranger Things - Cidade nas Trevas", preco: 20},
    {id: 3, nome: "Star Wars - Trilogy", preco: 35}
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const produto = produtos.find(p => p.id === id);
  
    if (!produto) {
      return res.status(404).send("Produto não encontrado");
    }
  
    res.json(produto);
});

app.delete("/produtos/:id", (req, res) => {
    const id = parseInt(req.params.id);
  
    const index = produtos.findIndex(produto => produto.id === id);
  
    if (index === -1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }
  
    produtos.splice(index, 1);
  
    res.json({ mensagem: "Produto removido com sucesso" });
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

app.post('/produtos', (req, res) => {

    const produto = req.body;
  
    produtos.push(produto);
  
    res.status(201).json(produto);
  
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});