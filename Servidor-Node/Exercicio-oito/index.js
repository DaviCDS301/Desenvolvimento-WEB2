const http = require("http");

const servidor = http.createServer((req, res) => {

    if(req.method === "GET"){
        res.end("Id: 01, Nome: Dags\n Id: 02, Nome: Chavez\n Id: 03, Nome: Maria");
    }

    else if(req.method === "POST"){
        res.end("Usuário criado");
    }

});

servidor.listen(3000);