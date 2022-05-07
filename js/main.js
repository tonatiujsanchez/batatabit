
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