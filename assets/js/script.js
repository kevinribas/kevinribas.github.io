/* Open and close mobile menu */

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains('bi-list')
    ? menuMobile.classList.replace('bi-list', 'bi-x')
    : menuMobile.classList.replace('bi-x', 'bi-list');
    body.classList.toggle('menu-mobile-active');
});

/*  Closes the menu when an item is clicked  */

const navItem = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        if (body.classList.contains('menu-mobile-active')) {
            body.classList.remove('menu-mobile-active');
            menuMobile.classList.replace('bi-x', 'bi-list');
        }
        const current = document.querySelector('.active');
        current.classList.remove('active');
        item.classList.add('active');
    });
});