function acertou (){
    var imagem = document.getElementById ('imagem-animal');
    imagem.src = "gato.jpg";
    var divBotao = document.getElementById ('div-botao');
    var alertAcertou = document.getElementById ('alert-acertou');
    alertAcertou.removeAttribute ("hidden",);
    divBotao.setAttribute ("hidden", "");
    console.log ("fim acertou");  
}
function errou (){
    var imagem = document.getElementById ('imagem-animal');
    imagem.src = "x.png";
    console.log ("fim errou"); 
}
console.log ("js aberto")  