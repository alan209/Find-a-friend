var menu = document.querySelector('.menu-mobile');
var menuDesktop = document.querySelector('.card .menu-desktop');
var divider = document.querySelector('.divider')
var menuOpenMobile = document.querySelector('.btn-menu .menu-open');
var menuOpenDesktop = document.querySelector('.card .btn-menu .menu-open');
var menuClosedMobile = document.querySelector('.btn-menu .menu-closed');
var menuClosedDesktop = document.querySelector('.card .btn-menu .menu-closed');

// Abrir menu hamburguer Mobile
function clickMenu() {
    menu.classList.toggle('element-hidden');
    menuDesktop.classList.toggle('element-hidden');
    menuOpenMobile.classList.toggle('element-hidden');
    menuClosedMobile.classList.toggle('element-hidden');
    menuOpenDesktop.classList.toggle('element-hidden');
    menuClosedDesktop.classList.toggle('element-hidden');
    divider.classList.toggle('element-hidden');
}