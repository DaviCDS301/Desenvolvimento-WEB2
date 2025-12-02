const paragrafo = document.getElementById("paragrafo");
const paragrafo2 = document.getElementById("paragrafo2");
const paragrafo3 = document.getElementById("paragrafo3");
const btnPrimeiroParagrafo = document.getElementById("btnPrimeiroParagrafo");
const btnSegundoParagrafo = document.getElementById("btnSegundoParagrafo");
const btnTerceiroParagrafo = document.getElementById("btnTerceiroParagrafo");

btnPrimeiroParagrafo.addEventListener("click", function(){
    paragrafo.textContent = "Não sobrou nada pro Beta";
} );

btnSegundoParagrafo.addEventListener("click", function(){
    paragrafo2.textContent = "Talvez fosse a hora de deixa-la ir";
} );

btnTerceiroParagrafo.addEventListener("click", function(){
    paragrafo3.textContent = "Faz o L";
} );