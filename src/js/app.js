'use strict';
// Elements

const createButton = document.querySelector('.home__button--strongbox');
const lockImage = document.querySelector('.home__img--lock');
const lockStars = document.querySelectorAll('.lock-stars');
const homeSection = document.querySelector('.home');
const generatorSection = document.querySelector('.pwd__generator');
const btnManager = document.querySelector('.btn--openmanager');
const btnTips = document.querySelector('.btn--opentips');
const btnExittips = document.querySelector('.tips__btn--close');
const btnCloseManager = document.querySelector('.btn--closemanager');

const passwordSection = document.querySelector('.generator--container');
const historySection = document.querySelector('.generator__history');
const managerSection = document.querySelector('.generator__manager');
const tipsSection = document.querySelector('.generator__tips');
let isAnimating = false;
let currentSection = 'home';

// Lock animation
document.addEventListener('DOMContentLoaded', function () {
  // Variables de contrôle

  // Assurer que le cadenas est ouvert initialement
  if (!lockImage.src.includes('lock-open.png')) {
    lockImage.src = 'assets/img/lock-open.png';
  }

  // Désactiver complètement le défilement de la page
  window.addEventListener(
    'wheel',
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  window.addEventListener(
    'touchmove',
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
});
// Fonction pour animer la transition vers le générateur
function navigateToGenerator() {
  if (isAnimating || currentSection !== 'home') return;
  isAnimating = true;

  // Animation du cadenas
  lockImage.classList.remove('lock-open');
  lockImage.classList.add('lock-closed');

  setTimeout(() => {
    // Réinitialiser l'apparence du bouton

    // Changer l'image du cadenas
    lockImage.src = 'assets/img/lock.png';

    // Animer les étoiles
    lockStars.forEach(star => {
      star.style.opacity = '0'; // Reset
      setTimeout(() => {
        star.style.animation = 'none';
        void star.offsetWidth; // Forcer un reflow
        star.style.animation = 'starFade 0.5s forwards';
      }, 2);
    });

    // Transition entre les sections après l'animation
    setTimeout(() => {
      homeSection.classList.add('move-up');
      generatorSection.classList.add('move-up');
      currentSection = 'generator';

      setTimeout(() => {
        isAnimating = false;
      }, 800);
    }, 800);
  }, 300);
}
function navigateToManager() {
  managerSection.classList.remove('hidden');
  passwordSection.classList.add('hidden');
  historySection.classList.add('hidden');
  btnManager.classList.add('hidden');
  btnCloseManager.classList.remove('hidden');
}
function closeManager() {
  managerSection.classList.add('hidden');
  passwordSection.classList.remove('hidden');
  historySection.classList.remove('hidden');
  btnManager.classList.remove('hidden');
  btnCloseManager.classList.add('hidden');
}
function navigateToTips() {
  tipsSection.classList.remove('hidden');
}
function closeTips() {
  tipsSection.classList.add('hidden');
}
// Événements de clic sur les boutons
createButton.addEventListener('click', navigateToGenerator);
btnManager.addEventListener('click', navigateToManager);
btnTips.addEventListener('click', navigateToTips);
btnExittips.addEventListener('click', closeTips);
btnCloseManager.addEventListener('click', closeManager);
