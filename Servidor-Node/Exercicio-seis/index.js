const http = require('http');
const fs = require('fs');

const servidor = http.createServer((req, res) => {

    if(req.url === "/") {

        fs.readFile('404.html', (erro, dados) => {
            res.end(dados);
        });

    }

});

servidor.listen(3000);