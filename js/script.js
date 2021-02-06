//Slider
const slider = document.querySelector('.portfolio__swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  slideClass:'portfolio__swiper-slide',
  wrapperClass:'portfolio__swiper-wrapper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});