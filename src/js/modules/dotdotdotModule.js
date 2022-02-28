import $ from 'jquery';
window.$ = $;

import dotdotdot from 'dotdotdot-js';

export default function () {

    document.addEventListener("DOMContentLoaded", () => {
        let wrapper = document.querySelector(".choise-card__text");
        let options = {
            height: 50
        };
    });

    let dot = new Dotdotdot(wrapper, options);
    dot.API.truncate();
}
