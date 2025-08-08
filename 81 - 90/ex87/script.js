let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculateArea() {

    resultado.innerHTML = ``
    for (let i = 0; i <= 100; i++) {
        if (i < 100) {
            resultado.innerHTML += `${i}, `
        } else {
            resultado.innerHTML += `${i}.`
        }
    }
}

button.addEventListener('click', calculateArea)
