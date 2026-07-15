// =====================================================
// NAVBAR — turns solid once the page is scrolled down
// =====================================================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    // show/hide the "back to top" button after scrolling 400px
    backToTop.classList.toggle("visible", window.scrollY > 400);
});

// =====================================================
// MOBILE MENU — hamburger icon opens/closes the nav links
// =====================================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// close the mobile menu automatically when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// =====================================================
// TYPING EFFECT — cycles through roles in the hero section
// Edit this array to change what gets typed out
// =====================================================
const roles = ["the web.", "clean interfaces.", "with JavaScript.", "with Python."];
const typedTextEl = document.getElementById("typedText");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedTextEl.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1400; // pause at the end of a word before deleting
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }

    setTimeout(typeLoop, speed);
}
typeLoop();

// =====================================================
// SCROLL REVEAL — fades sections in as they enter the viewport
// =====================================================
document.querySelectorAll(".section").forEach(section => {
    section.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // only animate once
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// =====================================================
// BACK TO TOP BUTTON
// =====================================================
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
