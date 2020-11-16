/* Referido a sub menu tengo ideas */
const ideas = document.getElementById('menu-ideas');
/* Referido a icono de telefono tengo ideas */
const tengo = document.getElementById('tengo-ideas');

ideas.addEventListener('click', () =>tengo.classList.toggle('menu--show'));