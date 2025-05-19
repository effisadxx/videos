window.onload = function() {
  var swiper = new Swiper(".swiper", {
    loop:true,
    initialSlide: 2,
    grabCursor: true,
    centeredSlides: true,
    speed: 1100,
    spaceBetween: 70,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    mousewheel: {
      thresholdDelta: 70,
    },
    effect: "cowerflow",
    coverflowEffect : {
      rotate: 45,
      stretch: 50,
      depth: 20,
      modifier: 1,
      slideShaows: false,
      useTransform: true,
    },
  });
};