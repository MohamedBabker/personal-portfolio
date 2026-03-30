// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile nav on click
    var navCollapse = document.querySelector(".navbar-collapse");
    if (navCollapse && navCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navCollapse).hide();
    }
  });
});

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

// Scroll to top button
var scrollBtn = document.createElement("button");
scrollBtn.className = "scroll-top-btn";
scrollBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});
