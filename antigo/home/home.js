const dicasApp = document.getElementById('dicas');
const newsApp = document.getElementById('news');
const dicasContainer = document.getElementById('dicas-container');
const newsContainer = document.getElementById('news-container');

dicasApp.addEventListener('click', function() {
    dicasContainer.style.display = 'block';
    newsContainer.style.display = 'none';
    dicasApp.classList.add('ativo');
    newsApp.classList.remove('ativo');
});

newsApp.addEventListener('click', function() {
    dicasContainer.style.display = 'none';
    newsContainer.style.display = 'block';
    newsApp.classList.add('ativo');
    dicasApp.classList.remove('ativo');
});


const btnPesquisa = document.getElementById('btn-pesquisa');
const pesquisaContainer = document.getElementById('pesquisa-container');
const blurContainer = document.getElementById('blur-container');

btnPesquisa.addEventListener('click', function() {
  pesquisaContainer.classList.toggle('oculto');
  blurContainer.classList.toggle('oculto');
});

blurContainer.addEventListener('click', function() {
    pesquisaContainer.classList.add('oculto');
    blurContainer.classList.add('oculto');
  });

const inputPesquisa = document.querySelector('#pesquisa-container input');

  inputPesquisa.addEventListener('click', function(event) {
    event.stopPropagation();
  });













const menu = document.getElementById('menu');
const menuContainer = document.getElementById('menu-container');
const blurDois = document.getElementById('blurDois');
  
  menu.addEventListener('click', function() {
    menuContainer.classList.toggle('oculto');
    blurDois.classList.toggle('oculto');
  });
  
  blurDois.addEventListener('click', function() {
      menuContainer.classList.add('oculto');
      blurDois.classList.add('oculto');
    });
  


  




  
