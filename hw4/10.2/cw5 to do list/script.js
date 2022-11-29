const slider = document.querySelector('.slider');
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');
const downButton = document.querySelector('.slider__down');
const upButton= document.querySelector('.slider__up');
const slidesLength = sliderRight.querySelectorAll('div').length;

let activeSlide = 0;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`

downButton.addEventListener('click', () => changeSlide('down'))
upButton.addEventListener('click', () => changeSlide('up'))


const changeSlide = (event) => {
    const sliderHeight = slider.clientHeight


    if (event === 'up') {
        activeSlide++
        if (activeSlide > slidesLength - 1) {
            activeSlide = 0
        }

    } else if (event === 'down') {
        activeSlide--
        if (activeSlide < 0) {
            activeSlide = slidesLength - 1
        }
    }

    sliderRight.style.transform = `translateY(-${activeSlide * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlide * sliderHeight}px)`

}