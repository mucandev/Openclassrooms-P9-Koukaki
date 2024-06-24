const swiper = new Swiper('.swiper-container', {
    slidesPerView : 3,
    spaceBetween : 30,
    loop: true,
    autoplay: {  
        delay: 2000,
    },
    grabCursor: true,
    centeredSlides: true,
    effect: 'coverflow',
    coverflowEffect: {
        depth: 100,  
        rotate: 60,
        slideShadows: false,
    },
});

console.log('fichier slider.js activé')
