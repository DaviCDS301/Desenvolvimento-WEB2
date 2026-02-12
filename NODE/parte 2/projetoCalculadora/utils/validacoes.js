function validarNumero(valor) {
    return !isNaN(Number(valor)) && valor !== '';
}

module.exports = {
    validarNumero
};