import $ from 'jquery';
window.$ = $;

import slick from 'slick-carousel';

export default function () {

    $('.slider-thumb').slick({
        asNavFor: '.slider-big',
        vertical: true,
        slidesToShow: 5,
        arrows: true,
        focusOnSelect: true,
        draggable: true,
        variableWidth: true,
        infinite: false,
    });

    $('.slider-big').slick({
        asNavFor: '.slider-thumb',
        arrows: false,
        fade: true,

    });

    $('.section-w-slider__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
}