var meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', function() {
  this.blur(); // Remove o foco do botão após o clique
});
