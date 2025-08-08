let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculate() {
    resultado.innerHTML = ``
    let numeros = []

    for (let i = 300; i >= 30; i--) {
        if (i % 3 == 0 && i % 5 == 0) {
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