let nome = process.argv[2];
let idade = process.argv[3];

console.log("===== Cadastro do Agente =====");

console.log("Nome:", nome);
console.log("Idade:", idade);

if (idade >= 18) {
    console.log("Status: Agente autorizado");
} else {
    console.log("Status: Acesso restrito");
}