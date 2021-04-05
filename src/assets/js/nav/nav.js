const burger = document.getElementById('nav__toggle');
const sidebar = document.getElementById('sidebar');

burger.addEventListener('click', event => {
   document.body.classList.toggle('show-sidebar');
});