let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

let number_input1 = document.querySelector('input#number1')
let number_input2 = document.querySelector('input#number2')

function calculate() {
    let number1 = number_input1.value
    let number2 = number_input2.value
    let aux = 0
    resultado.innerHTML = ``
    let numeros = []

    if (number1 > number2) {
        aux = number1
        number1 = number2
        number2 = aux
    }

    for (let i = number1; i < number2; i++) {
        if (i % 2 == 0 && i % 7 == 0) {
            numeros.push(i)
        }
    }
    
    for (let g = 0; g < numeros.length; g++) {
        if (g < (numeros.length - 1)) {
            resultado.innerHTML += `${numeros[g]}, `
        } else {
            resultado.innerHTML += `${numeros[g]}.`
        }
    }
}

button.addEventListener('click', calculate)