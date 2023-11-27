import React from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/scss/bundle';



function carrousel() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

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


    return (
        <>
            <div class="swiper">
// additionnal required wrapper
                <div class="swiper-wrapper">
// slides
                    <div class="swiper-slide"><img src="../../assets/images/accueil/eBook1.jpeg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../assets/images/accueil/eBook2.jpeg" alt="" /></div>
                    <div class="swiper-slide"><img src="../../assets/images/accueil/eBook3.jpeg" alt="" /></div>
// if more needed
                </div>
// if I want pagination
                <div class="swiper-pagination"></div>

// if i need navigation buttons
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

// if I need scroll bar

                <div class="swiper-scrollbar"></div>
            </div>
        </>
    );
}

export default carrousel;
