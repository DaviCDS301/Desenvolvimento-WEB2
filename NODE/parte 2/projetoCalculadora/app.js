const calc = require("./utils/operacoes");
const valid = require("./utils/validacoes");

const a = "12";
const b = "33";

if (valid.validarNumero(a) && valid.validarNumero(b)) {
    const numA = Number(a);
    const numB = Number(b);

    console.log("Soma:", calc.somar(numA, numB));
    console.log("Subtração:", calc.subtrair(numA, numB));
    console.log("Multiplicação:", calc.multiplicar(numA, numB));
    console.log("Divisão:", calc.dividir(numA, numB));
} else {
    console.log("Valor inválido");
}
