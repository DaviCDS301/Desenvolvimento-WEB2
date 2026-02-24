const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if(req.url === "/") {

        fs.readFile('noticia.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.url === "/sobre") {

        fs.readFile('sobre.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.url === "/contato") {

        fs.readFile('contato.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.url === "/404") {

        fs.readFile('404.html', (erro, dados) => {
            res.end(dados);
        });

    }

    else if(req.method === "GET"){
        res.end("Voce fez uma requisicao GET");
    }
    
    else if(req.method === "POST"){
        res.end("Voce fez uma requisicao POST");
    }
    
    });

servidor.listen(3000);