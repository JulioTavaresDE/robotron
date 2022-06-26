const msg = document.querySelector("#calcular")
msg.addEventListener("click",() => {
    enviaMensagem();
})

function enviaMensagem(){
    alert("Fui clicado..");
}