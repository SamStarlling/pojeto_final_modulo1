function vulcao(){
  document.write
(`
<body>
  <main>
    <section class="jogo">
      <h2 class="titulo">End Game</h2>

      <p class="historiaJogo">Usei o feitiço de levitação para levantar o galho, com isso cheguei na borda do vulcão</p>

      <p class="historiaJogo">De cima avisto uma porta escrito vitória.</p>

      <p class="historiaJogo">No decorrer do caminho consigo visualizar minha jordana até aqui</p>

      <p class="historiaJogo">Ao abrir aprota!</p>

      <p class="historiaJogo">Parabéns! Você conseguiu voltar para Hogwarts.</p>
      
    </section>

    <section class="escolha">
      <a class:"escolhaLink" href="../home/index.html">Jogar novamente!</a>
    </section>
  </main>
</body>
`)
}

function gameOver(){
  document.write(`
  <h2 class="titulo">Game Over!</h2>

  <p class="historiaJogo">Ao continuar balançando acabou rompendo a corda.</p>

  <p class="historiaJogo">Consigo sentir a sensação de queimadura na minha pele, depois de algum tempo tudo fica escuro</p>

  <p class="historiaJogo">Infelizmente Harry caiu dentro do vulção e não sobreviveu!</p>
  
  <p class="historiaJogo">Você perdeu!</p>
  
  <a class:"escolhaLink" href="../home/index.html">Tentar novamente</a>
  `)
}

function validacao() {
  var escolha = parseInt(prompt("Escolha 1- Fazer o feitiço de levitação! 2- Continuar balançando"));
  while (escolha != 1 & escolha != 2) {
    escolha = parseInt(prompt("Escolha 1- Fazer o feitiço de levitação! 2- Continuar a balançando"));
  }
  return escolha;
}

var escolha = validacao();

if (escolha == 1){
  vulcao();
  alert("O fim está próximo!")
}

else {
  gameOver();
}