const conteiner = document.getElementsByClassName("conteiner");
const btnInterruptor = document.getElementById("btnInterruptor");

btnInterruptor.addEventListener("click", function() {
    for (let item of conteiner){
        item.classList.toggle("highlight");
    }
} );