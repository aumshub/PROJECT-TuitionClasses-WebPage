document.addEventListener('DOMContentLoaded', function() {
    const swiperEl = document.querySelector('swiper-container');
    
    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 5000,  // 5 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        pagination: {
            clickable: true
        }
    };

    // Initialize with the parameters
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();

    // Start autoplay
    swiperEl.swiper.autoplay.start();
});