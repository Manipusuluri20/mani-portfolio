// ----------------------------------------------
// SMOOTH SCROLL FOR NAV LINKS & DOTS
// ----------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


// ----------------------------------------------
// SECTIONS + DOT NAV + NAVBAR LINK ACTIVATION
// ----------------------------------------------
const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");
const navLinks = document.querySelectorAll("header nav a");

function activateOnScroll() {
    let index = sections.length;

    // Find active section
    while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

    // Update dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

    // Update navbar links
    navLinks.forEach(nav => nav.classList.remove("active"));
    navLinks[index].classList.add("active");
}

activateOnScroll();
window.addEventListener("scroll", activateOnScroll);


// ----------------------------------------------
// SECTION FADE-IN ANIMATION
// ----------------------------------------------
const observer = new IntersectionObserver(entries => {
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
