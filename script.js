/* Smooth Scroll for All Menu Links */
document.querySelectorAll("header nav a, .side-nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* Highlight Active Section While Scrolling */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const dots = document.querySelectorAll(".side-nav .dot");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    // Highlight Navbar Links
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });

    // Highlight Side Dots
    dots.forEach(dot => {
        dot.classList.remove("active");
        if (dot.getAttribute("href").includes(current)) {
            dot.classList.add("active");
        }
    });
});
