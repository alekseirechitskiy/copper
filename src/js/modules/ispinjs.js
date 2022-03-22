import ISpin from 'ispin';

export default function () {
    var el = document.querySelector('.product-page__number');
    var spinner = new ISpin(el, {
        // options with defaults
        wrapperClass: 'ispin-wrapper',
        buttonsClass: 'ispin-button',
        step: 1,
        pageStep: 10,
        disabled: false,
        repeatInterval: 200,
        wrapOverflow: false,
        parse: Number,
        format: String
    });
}