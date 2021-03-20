function openMenu() {
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('#menu');
    let body = document.querySelector('#body');
    hamburger.onclick = function() {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        body.classList.toggle('scrol-stop');
        
    }
    let menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(function (menuLink){
        menuLink.onclick = function() {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
            body.classList.remove('scrol-stop');

        }
    })
}
openMenu();