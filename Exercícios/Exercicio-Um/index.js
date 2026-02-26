const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/sobre",(req, res) => {
    res.send("Nome do Sistema: Express \n Nome do dev: Davi Carvalho");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});