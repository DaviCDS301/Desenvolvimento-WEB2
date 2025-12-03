const input = document.getElementById("meuTexto");
const btnAdd = document.getElementById("btnAdicionar");
const btnLimpar = document.getElementById("btnExcluir");
const lista = document.getElementById("lista");

// Adicionar item à lista
btnAdd.addEventListener("click", () => {
    const valor = input.value.trim();

    if (valor === "") return; // evita adicionar vazio

    const li = document.createElement("li");
    li.textContent = valor;

    lista.appendChild(li);

    input.value = ""; // limpar campo
});

// Limpar a lista inteira
btnLimpar.addEventListener("click", () => {
    lista.innerHTML = "";
});