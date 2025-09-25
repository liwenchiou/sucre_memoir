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
    // nextEl: ".swiper-button-next",
    // prevEl: ".custom-prev",
  },
  //呈現三個
  slidesPerView: 1,
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
      slidesPerView: 1,
    },
    // 992px 以上（桌機）
    992: {
      slidesPerView: 1,
    },
  },
});

const top_swiper = new Swiper(".top-swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true, // true 表示交叉淡入淡出，過渡更平滑
  },
  loop: true,                    
  speed: 3000,  
  //間距24px
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // nextEl: ".swiper-button-next",
    // prevEl: ".custom-prev",
  },
  //呈現三個
  slidesPerView: 1,
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 1800, 
    disableOnInteraction: false,
  },
  // 響應式設定（類似 Bootstrap 的斷點）
  breakpoints: {
    // 0px 以上（手機）
    0: {
      slidesPerView: 1,
    },
    // 768px 以上（平板）
    768: {
      slidesPerView: 1,
    },
    // 992px 以上（桌機）
    992: {
      slidesPerView: 1,
    },
  },
});

