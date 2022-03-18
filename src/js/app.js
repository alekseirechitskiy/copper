import $ from "jquery";
import * as flsFunctions from "./modules/functions.js"
import slickModule from './modules/slickModule.js';
import mixitup from 'mixitup';

flsFunctions.isWebp();
flsFunctions.isIndex();
slickModule();
// dotdotdot();


//offer-page enter user's account
$('.user-header__btn-enter').on('click', function () {
    $('.user-header').remove();
    $('.user-header-authorized').css('display', 'block');
    $('.offer-page__input-box').css('display', 'flex');
});

$('.offer-page__input-box-btn').on('click', function () {
    let value = $('.form__input--small').val();
    if (value !== '') {
        $('.total-box__discount').css('display', 'flex');
    }
});

//radio-buttons
$('.form__radio').on('click', function () {
    $('.form__radio-title').removeClass('form__radio-title--checked');
    $($(this).children('.form__radio-title')).addClass('form__radio-title--checked');
});


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

var mixer = mixitup('.catalog__list');





