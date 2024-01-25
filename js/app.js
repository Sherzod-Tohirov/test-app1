const sliderTop = document.querySelector('.js-sw-top');
const sliderOne = document.querySelector('.js-slider-one');
const sliderBottom = document.querySelector('.js-sw-bottom');
const sliderTwo = document.querySelector('.js-slider-two');
let isOpen = false;
sliderTop.appendChild(sliderOne.cloneNode(true));
sliderBottom.appendChild(sliderTwo.cloneNode(true));


const barBtn = document.querySelector('.js-bar-btn');
const btnGroup = document.querySelector('.js-header-btn-group');
const nav = document.querySelector('.js-nav');

barBtn.addEventListener('click', (evt) => {
    btnGroup.style.display = 'flex';
    nav.style.display = 'flex';
    setTimeout(() => {
        nav.style.right = 0;
    }, 200);
    isOpen = true;
});

const closeBtn = document.querySelector('.js-close-btn');

closeBtn.addEventListener('click', (evt) => {
    nav.style.right = "-100vw";
    
    setTimeout(() => {
        btnGroup.style.display = 'none';
        nav.style.display = 'none';
    }, 200);
    isOpen = false;
});


window.addEventListener('resize', (evt) => {
    console.log(window.matchMedia('(min-width: 769px)').matches);
   if(window.matchMedia('(min-width: 769px)').matches) {
        btnGroup.style.display = 'flex';
        nav.style.display = 'flex';
        nav.style.right = 0;
   }else {
     if(isOpen) {
        btnGroup.style.display = 'flex';
        nav.style.display = 'flex';
     }else {
        btnGroup.style.display = 'none';
        nav.style.display = 'none';
     }
   }
});

