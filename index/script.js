// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const topMenu = document.querySelector('.top-menu');

    mobileMenuIcon.addEventListener('click', () => {
        topMenu.classList.toggle('active');
        mobileMenuIcon.classList.toggle('active');
        
    });
});
