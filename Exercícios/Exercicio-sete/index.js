const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const produtos = [
    {id: 1, nome: "Pudim", preco: 75},
    {id: 2, nome: "Pão", preco: 20},
    {id: 3, nome: "salgadinho", preco: 35}
];

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 