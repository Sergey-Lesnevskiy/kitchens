new Swiper('.swiper',{
  
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  slideToClickedSlide: true,
  watchOverflow:true,

  spaceBetween:20,
  slidesPerGroup:1,
  autoHeight:false,
  breakpoints: {
        320: {
        slidesPerView: 1,
          spaceBetween: '10px',
        },
        430: {
        slidesPerView: 1.2,
          spaceBetween: 0,
        },
        767: {
        slidesPerView: 2.2,
          spaceBetween: 0,
        },
        1100: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 3.1,
          spaceBetween: 0,
        },

      }
})