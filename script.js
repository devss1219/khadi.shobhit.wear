document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // ✅ CLOSE MENU WHEN A LINK IS CLICKED
  const links = document.querySelectorAll("#nav-links a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });
});
