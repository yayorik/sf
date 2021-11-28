function openMenu(){
    let nav = document.querySelector('#nav')
    let hamburger = document.querySelector('#hamburger');
    let navLinks = document.querySelector('#nav__links');
    let body = document.querySelector('#body');
    hamburger.onclick = function(){
        nav.classList.toggle('nav_active')
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
        body.classList.toggle('scroll_none');
    }
    let navLinksAll = document.querySelectorAll('#nav__links a');
    navLinksAll.forEach(function(navLinksA){
        navLinksA.onclick = function(){
            nav.classList.remove('nav_active')
            hamburger.classList.remove('hamburger_active');
            navLinks.classList.remove('nav__links_active');
            body.classList.remove('scroll_none');
        }
    })
}
openMenu();
function showNav() {
    let screen = window.pageYOffset;
    let nav = document.querySelector('#nav');
    nav.style.top = "0px";
    window.onscroll = function(){//запускаем функцию в момент прокрутки страницы
        let screenScroll = window.pageYOffset;
        console.log(screenScroll)
        if(screenScroll == 0){
            nav.style.top = "0px";
            nav.classList.remove("nav_show");
        }
        else{
            if(screen < screenScroll){
                nav.style.top = "-100px";  
                nav.classList.remove("nav_show");
            }
            else{
                nav.style.top = "0px";
                nav.classList.add("nav_show");
            }
        }
        screen = screenScroll
    }
}
showNav();