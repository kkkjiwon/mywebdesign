$(document).ready(function () {
  var portfolioSwiper = new Swiper(".portfolioSwiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // navigation
    navigation: {
      nextEl: ".portfolioSwiper .next",
      prevEl: ".portfolioSwiper .prev",
    },
    breakpoints: {
      //320 이상일때
      320: {
        slidesPerView: 1,
      },
      //480 이상일때
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      //768 이상일때
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});
