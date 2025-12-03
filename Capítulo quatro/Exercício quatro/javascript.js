const valorDisplay = document.getElementById("valor");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");

let Contador = 0;

function atualizarDisplay() {
    valorDisplay.textContent = Contador;
}

btnAumentar.addEventListener("click", () => {
    Contador += 1;
    atualizarDisplay();
} );

btnDiminuir.addEventListener("click", () => {
    Contador -= 1;
    atualizarDisplay();
} );