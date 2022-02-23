import $ from "jquery";
import * as flsFunctions from "./modules/functions.js"

flsFunctions.isWebp();

$('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
});

$('.menu__close').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
});


