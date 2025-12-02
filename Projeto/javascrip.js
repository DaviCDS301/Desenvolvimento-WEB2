const titulo = document.getElementById("titulo");
const btnTrocarTexto = document.getElementById("btnTrocarTexto");

btnTrocarTexto.addEventListener("click", function(){
    titulo.textContent = "O título foi alterado via DOM";
} );

const descricoes = document.getElementsByClassName("descricao");
const btnDestaque = document.getElementById("btnDestaque");

btnDestaque.addEventListener("click", function() {
    for (let item of descricoes){
        item.classList.toggle("highlight");
    }
} );

const btnQuery = document.getElementById("btnQuery");

btnQuery.addEventListener("click", function(){
    const primeiroParagrafo = document.querySelector("#conteiner p")
    primeiroParagrafo.style.color = "red";
} );

const btnQueryAll = document.getElementById("btnQueryAll");

btnQueryAll.addEventListener("click", function() {
    const paragrafo = document.querySelectorAll("#conteiner p");

    paragrafo.forEach( p => {
        p.style.border = "1px solid black";
        p.style.margin = "4px 0";
    });
} );

const btnCriar = document.getElementById("btnCriar");

btnCriar.addEventListener("click", function() {
    const novo = document.createElement("p");

    novo.textContent = "Eu fui criado dinamicamente";
    novo.classList.add("descricao");

    document.getElementById("conteiner").appendChild(novo);
} );

const btnRemover = document.getElementById("btnRemover");

btnRemover.addEventListener("click", function() {
    const conteiner = document.getElementById("conteiner");

    const itens = conteiner.querySelectorAll("p");

    if (itens.length > 0){
        itens[itens.length - 1].remove();
    }else {
        alert("Não há mais parágrafos para remover")
    }
} );