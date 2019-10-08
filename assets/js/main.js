var swiper = new Swiper('.vertical-swiper', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: false,
  hashNavigation: {
    watchState: true,
  },
});

var swiper2 = new Swiper('.linear-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
});
