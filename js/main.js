const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const imgRobotron = document.getElementById("robotron") 
var i=1



const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


imgRobotron.addEventListener("click",(evento)=>{
    mudaImageRobo(evento.target.textContent);
})

controle.forEach((elemento)=> {
    elemento.addEventListener("click",(evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})


function mudaImageRobo(){
     var Image_Id = document.getElementById('robotron');
    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'img/Robotron_Amarelo.png';

    imgArray[1] = new Image();
    imgArray[1].src = 'img/Robotron_Azul.png';

    imgArray[2] = new Image();
    imgArray[2].src = 'img/Robotron_Branco.png';
    
    imgArray[3] = new Image();
    imgArray[3].src = 'img/Robotron_Preto.png';

    imgArray[4] = new Image();
    imgArray[4].src = 'img/Robotron_Rosa.png';

    imgArray[5] = new Image();
    imgArray[5].src = 'img/Robotron_Vermelho.png';

    i = i + 1 
    if(i > imgArray.length - 1){
        i = 0
    }
    document.getElementById('robotron').src = imgArray[i].src;
}

function manipulaDados(operacao,controle){
    
    const peca = controle.querySelector("[data-contador]")

    if(operacao == "+"){
        peca.value = parseInt(peca.value) + 1
    }

    else{
        peca.value = parseInt(peca.value) - 1
    }
}

function atualizaEstatistica(peca){

 estatistica.forEach((elemento)=>{
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
 })
}