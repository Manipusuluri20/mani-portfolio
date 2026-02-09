/* Smooth Scrolling for Navigation */
document.querySelectorAll("header nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

/* Fade-in Animation on Scroll */
const hiddenElements = document.querySelectorAll(".section-card, .project-box, .skill-box");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, {
    threshold: 0.2
});

hiddenElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.7s ease-out";
    observer.observe(el);
});

/* Button Ripple Effect */
document.querySelectorAll(".btn, .btn-outline").forEach(button => {
    button.addEventListener("click", function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});
