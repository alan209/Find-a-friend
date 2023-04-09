
const swiperTeam = new Swiper('.swiper-team', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 10,

    mousewheel: true,
    keyboard: true,

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        375 : {
            slidesPerView: '1',
        },
        768: {
            slidesPerView: '2',
        },
        1024: {
            slidesPerView: '4',
            spaceBetween: 32,
        }
    }
});