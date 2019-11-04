function acertou (){
    var imagem = document.getElementById ('imagem-animal');
    imagem.src = "cachorro.jpg";
    var divBotao = document.getElementById ('div-botao');
    var alertAcertou = document.getElementById ('alert-acertou');
    var btnVoltar= document.getElementById ('btn-voltar');
    alertAcertou.removeAttribute ("hidden",);
    divBotao.setAttribute ("hidden", "");
    btnVoltar.removeAttribute("hidden"); 
    console.log ("fim acertou");  
}
function errou (){
    var imagem = document.getElementById ('imagem-animal');
    var divBotao = document.getElementById ('div-botao');
    var alertErrou = document.getElementById ('alert-errou');
    var btnVoltar= document.getElementById ('btn-voltar');
    alertErrou.removeAttribute ("hidden",); 
    divBotao.setAttribute ("hidden", "");
    btnVoltar.removeAttribute ("hidden");
    imagem.src = "erro.jpg";
    console.log ("fim errou"); 
}
console.log ("js aberto")  