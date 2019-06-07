function acertou (){
    var imagem = document.getElementById ('imagem-animal');
    imagem.src = "gato.jpg";
    console.log ("fim acertou");  
}
function errou (){
    var imagem = document.getElementById ('imagem-animal');
    imagem.src = "x.png";
    console.log ("fim errou"); 
}

console.log ("js aberto")  