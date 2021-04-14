function vulcao(){
  document.write
(`
<body>
  <main>
    <section class="jogo">
      <h2 class="titulo">Vulcano Frog</h2>

      <p class="historiaJogo">Ao pegar o sapo que estava nadando do meu lado</p>

      <p class="historiaJogo">Toda a água sumiu e derrepente desmaiei.</p>

      <p class="historiaJogo">Acordei pendurado dentro da boca do vulcão!</p>

      <p class="historiaJogo">Estou me balançando para tentar chegar na borda.</p>

      <p class="historiaJogo">Até que tenho uma ideia.</p>

      <p class="historiaJogo">O que vou fazer?</p>
      
    </section>

    <section class="escolha">
      <a class:"escolhaLink" href="fase3.html">Me ajudar!</a>
      <a class:"escolhaLink" href="../home/index.html">Desistir</a>
    </section>
  </main>
</body>
`)
}

function gameOver() {
  document.write(`
  <p>Ao pegar a varinha nem tive tempo de pensar no feitiço. O mundo ficou escuro e começei a rodar.</p>

  <p>Voltei para a biblioteca e os dois estavam rindo</p>

  <p><b>Infelizmente, você perdeu!</b></p>

  <a class:"escolhaLink" href="../home/index.html">Tentar Novamente!</a>
  `)
}

function validacao() {
  var escolha = parseInt(prompt("Escolha 1- Pegar a varinha e fazer um feitiço 2- Pegar o sapo"));
  while (escolha != 1 & escolha != 2) {
    escolha = parseInt(prompt("Escolha 1- Pegar a varinha e fazer um feitiço 2- Pegar o sapo"));
  }
  return escolha;
}

var escolha = validacao();

if (escolha == 2){
  vulcao();
}

else {
  gameOver()
}
