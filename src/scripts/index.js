import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';

const hero = document.querySelector('#hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const menu = document.querySelector('#hamburgerMenu');

menu.addEventListener('click', e => {
  drawer.classList.toggle('open');
  e.stopPropagation();
});