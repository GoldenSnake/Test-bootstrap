const circle1 = document.querySelector('.normal') // назначение константы и указания класса в css
const inputs = [].slice.call(document.querySelectorAll('input')); // собирает все input

inputs.forEach(input => input.addEventListener('change', handleUpdate)); // при изменении значения вызывает функцию, изменять имя функции в скобках и в вызове


function handleUpdate(e) { // назначение по id input и присвоение нового значения
  if (this.id === 'color-picker1') {
    circle1.style.setProperty('--circle1-color', this.value)
  } 
}

const circle2 = document.querySelector('.hover')
inputs.forEach(input => input.addEventListener('change', handleUpdate2));
function handleUpdate2(e) {
     if (this.id === 'color-picker2') {
    circle2.style.setProperty('--circle2-color', this.value)
  }    
}

const circle3 = document.querySelector('.active-11')
inputs.forEach(input => input.addEventListener('change', handleUpdate3));
function handleUpdate3(e) {
     if (this.id === 'color-picker3') {
    circle3.style.setProperty('--circle3-color', this.value)
  }    
}

const circle4 = document.querySelector('.btn-primary-b1.disabled')
inputs.forEach(input => input.addEventListener('change', handleUpdate4));
function handleUpdate4(e) {
     if (this.id === 'color-picker4') {
    circle4.style.setProperty('--circle4-color', this.value)
  }    
}