function floresta(){
  document.write
(`
<body>
  <main>
    <section class="jogo">
      <h2 class="titulo">Frog Splash Time</h2>

      <p class="historiaJogo">Cai numa floresta cheia de sapos com diversas cores!</p>

      <p class="historiaJogo">O objetivo final deve ser enfrentar um sapo gigante, que piada!</p>

      <p class="historiaJogo">Estou caminhando derrepente aparece uma luz muito forte iluminando todo o ambiente.</p>

      <p class="historiaJogo"></p>

      <p class="historiaJogo">Até que sou jogado na água, minha varinha escapou da minha mão.</p>

      <p class="historiaJogo">Começo a tentar nadar até a varinha, mas tem algo me puxando para baixo;</p>

      <p class="historiaJogo">O que vou fazer?</p>
      
    </section>

    <section class="escolha">
      <a class:"escolhaLink" href="fase2.html">Me ajudar!</a>
      <a class:"escolhaLink" href="../home/index.html">Desistir</a>
    </section>
  </main>
</body>
`)
}

function gameOver() {
  document.write(`
  <h2 class="titulo">Game Over!</h2>

  <p class="historiaJogo">O jogo ainda está em desenvolvimento, os criadores ainda não inseriram esse cenário!</p>

  <p class="historiaJogo">Volte posteriormente para jogar nesse cenário!</p>

  <p class="historiaJogo"><b>Infelizmente, você perdeu!</b></p>

  <a class:"escolhaLink" href="../home/index.html">Tentar Novamente!</a>
  `)
}

function validacao() {
  var cenario = parseInt(prompt("Escolha 1- Floresta ou 2- Praia"));

  while(cenario != 1 & cenario != 2){
    cenario = parseInt(prompt("Escolha 1- Floresta ou 2- Praia"))
  }
  return cenario
}

var cenario = validacao();

if (cenario === 1) {
  floresta();
}

else {
  gameOver();
}
