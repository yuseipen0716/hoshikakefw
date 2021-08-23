var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    speed: 600,
    sliderPerView: 6,
    spaceBetween: 10,
    direction: 'horizontal',
    effect: 'slide',

    autoplay: {
        delay: 3000,
        stopOnLast: false,
        disableOnInteraction: true
    },
    breakpoints: {
        980: {
            sliderPerView: 3,
            spaceBetween: 30
        },
        640: {
            sliderPerView: 2,
            spaceBetween: 20
        }
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});