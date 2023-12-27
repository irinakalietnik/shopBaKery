const swiper = new Swiper(".swiper-conteiner", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    },
    1280: { slidesPerView: 3 },
  },
  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },
  navigation: {
    nextEl: ".btn-format.next",
    prevEl: ".btn-format.prev",
  },
});
