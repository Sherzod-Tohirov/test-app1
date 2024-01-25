const sliderTop = document.querySelector('.js-sw-top');
const sliderOne = document.querySelector('.js-slider-one');
const sliderBottom = document.querySelector('.js-sw-bottom');
const sliderTwo = document.querySelector('.js-slider-two');

sliderTop.appendChild(sliderOne.cloneNode(true));
sliderBottom.appendChild(sliderTwo.cloneNode(true));


const barBtn = document.querySelector('.js-bar-btn');

barBtn.addEventListener('click', (evt) => {
    window.scroll(10000, 0)
});

const closeBtn = document.querySelector('.js-close-btn');

closeBtn.addEventListener('click', (evt) => {
    window.scroll(0, 0);
});