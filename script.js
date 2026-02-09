// Smooth Scroll for All Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// Side Dot Navigation Active State Handler
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

function activateDot() {
    let index = sections.length;

    while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

activateDot();
window.addEventListener("scroll", activateDot);



// Navbar auto active highlight
const navLinks = document.querySelectorAll("header nav a");

function highlightNav() {
    let idx = sections.length;

    while (--idx && window.scrollY + 150 < sections[idx].offsetTop) {}

    navLinks.forEach((a) => a.classList.remove("active"));
    navLinks[idx].classList.add("active");
}

highlightNav();
window.addEventListener("scroll", highlightNav);



// Fade-in animation for each section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});
