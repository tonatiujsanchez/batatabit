
// Tables Slides
const slidersTable = document.querySelector('.sliders-table')
const slider = document.querySelector('.sliders-table__slider')

const btnNext = document.querySelector('.slider-controls_next')
const btnPrev = document.querySelector('.slider-controls_prev')


const nextTable = () => {
    slidersTable.style.transform = `translate(-${slider.offsetWidth}px)`;
    btnNext.style.display = 'none'
    btnPrev.style.display = 'inline-flex'

}

const previusTable = () => {
    slidersTable.style.transform = `translate(0)`;
    btnPrev.style.display = 'none'
    btnNext.style.display = 'inline-flex'
}


// Prices Slides
const slidePriceContent = document.querySelector('.plans-container--slider')
const slidePrice = document.querySelector('.plan-content--slide')
const btnSlidesPricesNext = document.querySelector('.main-plans__controls-next')
const btnSlidesPricesPrev = document.querySelector('.main-plans__controls-prev')
let positionPrices = 0;


const previusPrice = () => {
    positionPrices = positionPrices - (slidePrice.offsetWidth + 10)
    slidePriceContent.style.transform = `translateX(${-positionPrices}px)`

    if(-positionPrices >= 220){
        btnSlidesPricesPrev.style.display = 'none'
    }
    if(positionPrices === 0){
        btnSlidesPricesNext.style.display = 'inline-flex'
    }
}

const nextPrice = () => {
    positionPrices = positionPrices + (slidePrice.offsetWidth + 10)
    slidePriceContent.style.transform = `translateX(-${positionPrices}px)`

    if(positionPrices >= 220){
        btnSlidesPricesNext.style.display = 'none'
        btnSlidesPricesPrev.style.display = 'inline-flex'
        
    }
    if(positionPrices === 0){
        btnSlidesPricesPrev.style.display = 'inline-flex'
    }
}