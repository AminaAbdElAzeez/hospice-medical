var openBtn = document.querySelector(".bttn");
var list = document.querySelector(".list");
var mobileNav = document.querySelector(".mobile-nav");
var close = document.querySelector(".mobile-nav .close");
var num = document.querySelectorAll(".about .box .num");
var aboutSection = document.querySelector(".about");
var started = false;


openBtn.onclick = () => mobileNav.style.left = "0%";

close.onclick = () => mobileNav.style.left = "-100%";

window.onscroll = function (){
    if(window.scrollY <= aboutSection.offsetTop) {
        if(!started){
            num.forEach((el) => startCount(el));
        }
        started = true;
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 2000 / goal)
}
