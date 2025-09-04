const swiper = new Swiper(".swiper", {
  //間距24px
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //呈現三個
  slidesPerView: 3,
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: true,

  // 響應式設定（類似 Bootstrap 的斷點）
  breakpoints: {
    // 0px 以上（手機）
    0: {
      slidesPerView: 1,
    },
    // 768px 以上（平板）
    768: {
      slidesPerView: 2,
    },
    // 992px 以上（桌機）
    992: {
      slidesPerView: 3,
    },
  },
});
