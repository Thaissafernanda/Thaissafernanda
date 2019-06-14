function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
      palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
   
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.backgroundColor = 'green';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
      baixoOuAlto.textContent = '';
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.backgroundColor = 'red';
      if(palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
      } else if(palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = 'Seu palpite está muito alto!';
      }
    }
   
    contagemPalpites=1;
    campoPalpite.value = '';
    campoPalpite.focus();
  }
  envioPalpite.addEventListener('click', conferirPalpite);
 
  function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
  }

  function reiniciarJogo() {
  contagemPalpites = 1;

  var reiniciarParas = document.querySelectorAll('.resultadoParas p');
  for (var i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }

  campoPalpite.disabled = false;
  envioPalpite.disabled = false;
  campoPalpite.value = '';
  campoPalpite.focus();

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
;}
for (var i = 1 ; i < 21 ; i++) { console.log(i) }
var reiniciarParas = document.querySelectorAll('.resultadoParas p');
for (var i = 0 ; i < reiniciarParas.length ; i++) {
  reiniciarParas[i].textContent = '';
}