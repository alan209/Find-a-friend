var menu = document.querySelector('.menu-mobile');
var divider = document.querySelector('.divider')
var menuOpenMobile = document.querySelector('.btn-menu .menu-open');
var menuClosedMobile = document.querySelector('.btn-menu .menu-closed');

// Abrir menu hamburguer Mobile
function clickMenu() {
    menu.classList.toggle('element-hidden');
    menuOpenMobile.classList.toggle('element-hidden');
    menuClosedMobile.classList.toggle('element-hidden');
    divider.classList.toggle('element-hidden');
}