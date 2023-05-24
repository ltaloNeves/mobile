var prevScrollPos = window.pageYOffset;
var navBar = document.getElementById('navBar');
var pesquisaBtn = document.getElementById('pesquisa');

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos < currentScrollPos) {
    navBar.classList.add('hide');
    pesquisaBtn.style.visibility = 'hidden';
  } else {
    navBar.classList.remove('hide');
    pesquisaBtn.style.visibility = 'visible';
  }

  prevScrollPos = currentScrollPos;
});


var scrollContainer = document.getElementById("dicas");
scrollContainer.scrollLeft = 100; // Valor em pixels para a posição de rolagem horizontal



const socialApp = document.getElementById('social');
const noticiasApp = document.getElementById('noticias');
const socialContainer = document.getElementById('socialContainer');
const noticiasContainer = document.getElementById('noticiasContainer');

socialApp.addEventListener('click', function() {
  socialContainer.style.display = 'block';
  noticiasContainer.style.display = 'none';
  socialApp.classList.add('ativo');
  noticiasApp.classList.remove('ativo');
  this.blur()
});

noticiasApp.addEventListener('click', function() {
  socialContainer.style.display = 'none';
  noticiasContainer.style.display = 'block';
  noticiasApp.classList.add('ativo');
  socialApp.classList.remove('ativo');
  this.blur()
});

window.addEventListener('DOMContentLoaded', function() {
  socialApp.classList.add('ativo');
});




const navHome = document.getElementById('navHome');
const navPesquisa = document.getElementById("navPesquisa");
const navCarteira = document.getElementById('navCarteira');
const navConfig = document.getElementById('navConfig');
const homeContainer = document.getElementById('home');
const carteiraContainer = document.getElementById('vacinaContainer');
const configContainer = document.getElementById('configContainer');
const pesquisaContainer = document.getElementById('pesquisaContainer');

navHome.addEventListener('click', function() {
  homeContainer.style.display = 'block';
  pesquisaContainer.style.display = 'none';
  carteiraContainer.style.display = 'none';
  configContainer.style.display = 'none';

  navHome.classList.add('ativo');
  navPesquisa.classList.remove('ativo');
  navCarteira.classList.remove('ativo');
  navConfig.classList.remove('ativo');

  this.blur();
  
});

navPesquisa.addEventListener('click', function() {
  homeContainer.style.display = 'none';
  pesquisaContainer.style.display = 'block';
  carteiraContainer.style.display = 'none';
  configContainer.style.display = 'none';

  navHome.classList.remove('ativo');
  navPesquisa.classList.add('ativo');
  navCarteira.classList.remove('ativo');
  navConfig.classList.remove('ativo');

  this.blur();
});

navCarteira.addEventListener('click', function() {
  homeContainer.style.display = 'none';
  pesquisaContainer.style.display = 'none';
  carteiraContainer.style.display = 'block';
  configContainer.style.display = 'none';

  navHome.classList.remove('ativo');
  navPesquisa.classList.remove('ativo');
  navCarteira.classList.add('ativo');
  navConfig.classList.remove('ativo');

  this.blur();
});

navConfig.addEventListener('click', function() {
  homeContainer.style.display = 'none';
  pesquisaContainer.style.display = 'none';
  carteiraContainer.style.display = 'none';
  configContainer.style.display = 'block';

  navHome.classList.remove('ativo');
  navPesquisa.classList.remove('ativo');
  navCarteira.classList.remove('ativo');
  navConfig.classList.add('ativo');

  this.blur();
});

window.addEventListener('DOMContentLoaded', function() {
  navHome.classList.add('ativo');
});





document.getElementById('pesquisaInput').addEventListener('keyup', function(event) {
  if (event.keyCode === 13){
    var query = document.getElementById('pesquisaInput').value;
    window.location.href = 'pagina_de_resultados.html?query=' + encodeURIComponent(query);

    event.preventDefault();
  }
})


const pesquisar = document.getElementById('pesquisa');
const sendBox = document.getElementById('send');
const home = document.getElementById('mainContainer');
const close = document.getElementById('close');

pesquisar.addEventListener('click', function() {
  sendBox.style.display = 'block';
  home.style.display = 'none';

  sendBox.classList.add('ativo');
  pesquisar.classList.remove('ativo');
});

close.addEventListener('click', function() {
  sendBox.style.display = 'none';
  home.style.display = 'block';
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#pesquisa') && !event.target.closest('#send')) {
    sendBox.style.display = 'none';
    home.style.display = 'block';
  }
});
