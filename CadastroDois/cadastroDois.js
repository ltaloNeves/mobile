const userLeigoApp = document.getElementById("userLeigo");
const userProfessionalApp = document.getElementById('userProfessional');
const leigoContainer = document.getElementById("leigo");
const profissionalContainer = document.getElementById("profissional");

userLeigoApp.addEventListener('click', function() {
    leigoContainer.style.display = 'block';
    profissionalContainer.style.display = 'none';
    userLeigoApp.classList.add('ativo');
    userProfessionalApp.classList.remove('ativo');
});

userProfessionalApp.addEventListener('click', function() {
    leigoContainer.style.display = 'none';
    profissionalContainer.style.display = 'block';
    userProfessionalApp.classList.add('ativo');
    userLeigoApp.classList.remove('ativo');
});

window.addEventListener('DOMContentLoaded', function() {
    userLeigoApp.classList.add('ativo');
});



