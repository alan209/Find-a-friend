const swiperPets = new Swiper('.swiper-pets', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination-pets',
    },

    mousewheel: true,
    keyboard: true,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});