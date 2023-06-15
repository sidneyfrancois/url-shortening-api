const navbar = document.getElementById("navbar");
const btnToggleMenu = document.getElementById("nav-toggle");

function toggleMenu() {
  console.log("clikou");
  navbar.classList.toggle("nav-mobile-toggle");
}

btnToggleMenu.addEventListener("click", toggleMenu);
