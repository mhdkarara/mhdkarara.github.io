// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("active");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✕" : "☰";

});

// Close mobile menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";

  });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

  });

} else {

  document.querySelectorAll(".reveal").forEach(element => {

    element.classList.add("visible");

  });

}


// ========================================
// CURRENT YEAR
// ========================================

document.getElementById("year").textContent =
  new Date().getFullYear();
