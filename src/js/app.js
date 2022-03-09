import $ from "jquery";
import * as flsFunctions from "./modules/functions.js"
import slickModule from './modules/slickModule.js';

flsFunctions.isWebp();
flsFunctions.isIndex();
slickModule();
// dotdotdot();

$('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
});

$('.menu__close').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
});


$(".footer__btn, .footer__logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
});





