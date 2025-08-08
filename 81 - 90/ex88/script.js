let button = document.querySelector('button')
let resultado = document.querySelector('p#r')
let number_input = document.querySelector('input#number')

function calculateArea() {
    let number = number_input.value

    resultado.innerHTML = ``

    if (number <= 0) {
        number_input.style.border = `2px solid red`
    } else {
        number_input.style.border = `2px solid #131313`
        for (let i = 0; i <= number; i++) {
            if (i < number) {
                resultado.innerHTML += `${i}, `
            } else {
                resultado.innerHTML += `${i}.`
            }
        }
    }
}

button.addEventListener('click', calculateArea)
