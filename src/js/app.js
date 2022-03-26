import $ from "jquery";
import * as flsFunctions from "./modules/functions.js"
import slickModule from './modules/slickModule.js';
// import ispin from './modules/ispinjs.js';
import mixitup from './modules/mixItUp.js';
// import mixitup from 'mixitup';
import inputNumber from "./modules/inputNumber.js";
import select from "./modules/select.js";

flsFunctions.isWebp();
flsFunctions.isIndex();



// dotdotdot();
// let aaa = $('.custom-select__option')[0];
// // console.log($('.custom-select__option')[0].hasClass());
// console.log(aaa.prop('classList'));


// let elemAll = $('.custom-select__option')[0];
// let elem = $('.custom-select__option')[2];
// let elem2 = $('.custom-select__option')[3];
// elemAll.setAttribute('data-filter', 'all');
// elem.setAttribute('data-filter', '.category-a');
// elem2.setAttribute('data-filter', '.category-b');
// console.log(elemAll);
// console.log(elem);
// console.log(elem2);


$(window).on('hashchange', function () {
    //делаем что-то, когда поменяется хеш (часть в URL после #)
    console.log('sdfsdff');
    if (location.hash === "#favourites") {
        $('.tabs__navigation-item').removeClass('tabs__navigation-item--active');
        $('#favourites').addClass('tabs__navigation-item--active');
    }
});

$('.slider__favourite').on('click', function () {
    $($(this)).toggleClass('slider__favourite--liked');
});

$('.pagination__link--number').on('click', function () {
    $('.pagination__link--number').removeClass('pagination__link--active');
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


//вход в аккаунт пользователя на orderer-page
$('.user-header__btn-enter').on('click', function () {
    $('.user-header').remove();
    $('.user-header-authorized').css('display', 'block');
    $('.order-page__input-box').css('display', 'flex');
});

$('.order-page__input-box-btn').on('click', function () {
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
    $('#body').css('overflow', 'hidden');
});

$('.menu__close').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('#body').css('overflow', 'auto');
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

slickModule();
inputNumber();
select();
mixitup();
// var mixer = mixitup('.catalog__list');





