const navbutton = document.querySelector('#hamburger-btn');
const navBar = document.querySelector('#nav-bar ul');

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('open');
});