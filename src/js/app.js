//=include ./helpers/elementsNodeList.js
//=include ./helpers/toggleBodyLock.js
//=include ./modules/index.js

// Включить/выключить FLS (Full Logging System) (в работе)


document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    if(document.querySelector('.content')) {
        let swiper = new Swiper('.content-swiper', {
            spaceBetween: 0,
            effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
            allowTouchMove: false,
            navigation: {
                nextEl: '.content__arrow.next',
                prevEl: '.content__arrow.prev',
            },
            // autoplay: true,
            speed: 1000,
        });
    }

    if(document.querySelector('.template-swiper')) {
        let swipers = document.querySelectorAll('.template-swiper')

        swipers.forEach(swiper => {
            let swiperCreator = new Swiper(swiper, {
                // Default parameters
                slidesPerView: 3,
                spaceBetween: 30,
                // Responsive breakpoints
                navigation: {
                    nextEl: swiper.parentNode.querySelector('.better__arrow.next'),
                    prevEl: swiper.parentNode.querySelector('.better__arrow.prev'),
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 12
                    },
                    // when window width is >= 480px
                    561: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 1.8,
                        spaceBetween: 30,
                    },
                    // when window width is >= 480px
                    1079: {
                        slidesPerView: 2.6,
                        spaceBetween: 30,
                    },
                }
            })
        })
    }

    if(document.querySelector('.travel-faq')) {
        let faqItems = document.querySelectorAll('.travel-faq-titleBx')

        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                let content = item.parentNode.querySelector('.travel-faq-answer');

                if(content.style.maxHeight){
                    content.style.maxHeight = null;
                    item.parentNode.classList.remove('active');
                }else{
                    document.querySelectorAll('.travel-faq-answer').forEach(el => el.style.maxHeight = null);
                    document.querySelectorAll('.travel-faq__item').forEach(el => el.classList.remove('active'));
                    content.style.maxHeight = content.scrollHeight + 'px';
                    item.parentNode.classList.add('active');
                }

            })
        })
    }

    if(document.querySelector('.geography')) {
        if(window.innerWidth < 560) {
            let swiper = new Swiper('.geography-swiper', {
                spaceBetween: 12,
                slidesPerView: 1.2,
                // fadeEffect: {
                //     crossFade: true
                // },
                // autoplay: true,
            });
        }
    }

    if(document.querySelector('.countries')) {
        if(window.innerWidth <= 768) {
            let faqItems = document.querySelectorAll('.countries__item-title')

            faqItems.forEach(item => {
                item.addEventListener('click', () => {
                    let content = item.parentNode.querySelector('.countries__item-answer');

                    if(content.style.maxHeight){
                        content.style.maxHeight = null;
                        item.parentNode.classList.remove('active');
                    }else{
                        document.querySelectorAll('.countries__item-answer').forEach(el => el.style.maxHeight = null);
                        document.querySelectorAll('.countries__item').forEach(el => el.classList.remove('active'));
                        content.style.maxHeight = content.scrollHeight + 'px';
                        item.parentNode.classList.add('active');
                    }

                })
            })
        }
    }
});


// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

// togglePopupWindows()
// =======================================================================================================
