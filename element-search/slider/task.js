let slides = document.querySelectorAll('.slider__item');
let before = document.querySelector('.slider__arrow_prev');
let after = document.querySelector('.slider__arrow_next');

let total = 0;
before.onclick = function () {
    total--;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    } if (total < 0) {
        total = slides.length - 1;
    }
    slides[total].className = 'slider__item slider__item_active';
};
after.onclick = function () {
    total++;
    for (let slide of Array.from(slides)) {
        slide.className = 'slider__item';
    } if (total >= slides.length) {
        total = 0;
    }
    slides[total].className = 'slider__item slider__item_active';
};