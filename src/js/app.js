import $ from "jquery";
import * as flsFunctions from "./modules/functions.js"
import slickModule from './modules/slickModule.js';
import ispin from './modules/ispinjs.js';
import mixitup from 'mixitup';
import inputNumber from "./modules/inputNumber.js";

flsFunctions.isWebp();
flsFunctions.isIndex();
slickModule();
inputNumber();



// ispin();
// inputNumber();
// dotdotdot();



// var el = document.querySelector('.product-page__number');
// var spinner = new ISpin(el, {
//     // options with defaults
//     wrapperClass: 'ispin-wrapper',
//     buttonsClass: 'ispin-button',
//     step: 1,
//     pageStep: 10,
//     disabled: false,
//     repeatInterval: 200,
//     wrapOverflow: false,
//     parse: Number,
//     format: String
// });

$('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('pagination__link--active');
    $($(this)).addClass('pagination__link--active');
});

//табы в Личном кабинете
$('.tabs__navigation-item').on('click', function (e) {
    e.preventDefault();
    console.log('click');
    $('.tabs__navigation-item').removeClass('tabs__navigation-item--active');
    $(this).addClass('tabs__navigation-item--active');

    $('.tabs__content-tiem').removeClass('tabs__content-tiem--active');
    $($(this).attr('href')).addClass('tabs__content-tiem--active');

});

$('.button--save').on('click', function () {
    $('.personal-info__messages-box').toggleClass('personal-info__messages-box--active');
    setTimeout(function () {
        $('.personal-info__messages-box').toggleClass('personal-info__messages-box--active');
    }, 2000);
});

//удаление позиции из списка товаров (в Корзине и в Списке желаемого)
$('.table-item__delete-btn').on('click', function () {
    $($(this).closest('.table-item')).remove();
});


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
ispin();





