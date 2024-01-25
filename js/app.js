const sliderTop = document.querySelector('.js-sw-top');
const sliderOne = document.querySelector('.js-slider-one');
const sliderBottom = document.querySelector('.js-sw-bottom');
const sliderTwo = document.querySelector('.js-slider-two');

sliderTop.appendChild(sliderOne.cloneNode(true));
sliderBottom.appendChild(sliderTwo.cloneNode(true));

