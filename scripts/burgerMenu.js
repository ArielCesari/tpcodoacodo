const burgerMenu = document.querySelector('.fas.fa-bars');
const navBar = document.querySelector('.main-navbar');

burgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
});