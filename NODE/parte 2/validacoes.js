function validarNome(nome){
    if (nome >= "Ana"){
        console.log("Nome: ");
    }else {
        console.log("ERRO");
    }
    return nome;
}

function validarIdade(idade){
    if (idade >= 0){
        console.log("Idade: ");
    }else {
        console.log("ERRO");
    }
    return idade;
}

module.exports = {
    validarNome,
    validarIdade
};