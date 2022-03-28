// import Ellipsis from 'ellipsis.js';
import Dotdotdot from 'dotdotdot-js';

export default function () {
    // Ellipsis({
    //     className: '.dotClass',

    //     lines: 3,
    // });
    // Ellipsis({
    //     className: '.news-card__text',
    //     lines: 6,
    // })

    let dot = document.querySelectorAll(".dotClass, .news-card__text");
    for (let i = 0; i < dot.length; i++) {

        document.addEventListener("DOMContentLoaded", () => {
            let wrapper = dot[i];
            let options = {
                height: 57
            };
            new Dotdotdot(wrapper, options);
        });
    }

    // document.addEventListener("DOMContentLoaded", () => {
    //     let wrapper = document.querySelector(".news-card__text");
    //     let options = {
    //         height: 100
    //     };
    //     new Dotdotdot(wrapper, options);

    // });

    // let dot = new Dotdotdot(wrapper, options);




    // dot.API.truncate();

}
