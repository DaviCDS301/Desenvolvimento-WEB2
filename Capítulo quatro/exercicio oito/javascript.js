const menu = document.querySelector("#menu");
const btnEsconder = document.querySelector("#btnEsconder");

btnEsconder.addEventListener("click", () => {
    menu.classList.toggle("fechar");
} );