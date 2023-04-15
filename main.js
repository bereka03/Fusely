let nav = document.querySelector(".mobile-inner-nav");
function hamMenu(){
    let hamburger = document.querySelector(".hamburger");
    let body = document.querySelector("body");
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle("active");
        nav.classList.toggle('active');
        body.classList.toggle('flow-hidden');
        
    })
}
hamMenu();