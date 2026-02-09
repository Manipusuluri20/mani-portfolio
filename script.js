// Highlight Active Dot on Scroll
const sections = document.querySelectorAll("section");
const navDots = document.querySelectorAll(".side-nav .dot");

function activateDot() {
    let scrollPos = window.pageYOffset + 150;

    sections.forEach((sec, index) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {

            navDots.forEach(dot => dot.classList.remove("active"));
            navDots[index].classList.add("active");
        }
    });
}

window.addEventListener("scroll", activateDot);


// Smooth Scroll for Side Nav Dots (mobile-safe)
navDots.forEach((dot, index) => {
    dot.addEventListener("click", function (e) {
        e.preventDefault();
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});


// Smooth Scroll for Navbar Links
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
