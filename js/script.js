var openBtn = document.querySelector(".bttn");
var list = document.querySelector(".list");
var mobileNav = document.querySelector(".mobile-nav");
var close = document.querySelector(".mobile-nav .close");
var num = document.querySelectorAll(".about .box .num");
var aboutSection = document.querySelector(".about");
var topBtn = document.getElementById("top");
var started = false;

// For Mobile Nav
openBtn.onclick = () => mobileNav.style.left = "0%";

// For Mobile Nav
close.onclick = () => mobileNav.style.left = "-100%";

// For Counting Number in About Section
window.onscroll = function (){
    if(window.scrollY >= aboutSection.offsetTop) {
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
    }, 5000 / goal)
}

// For Smooth Scrolling to Top
window.addEventListener("scroll" , () => {
    window.scrollY >= 100 ? topBtn.classList.add("show") : topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    });
});