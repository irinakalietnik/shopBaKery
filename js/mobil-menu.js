const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const closeItemmenu = document.querySelectorAll(".close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");
menuBtnOpen.addEventListener("click", disableScroll);
menuBtnClose.addEventListener("click", disableScroll);

menuBtnClose.addEventListener("click", toggleMenu);
menuBtnOpen.addEventListener("click", toggleMenu);
for (elem of closeItemmenu) {
  elem.addEventListener("click", toggleMenu);
}
