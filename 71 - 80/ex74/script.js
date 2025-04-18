let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {
    for (let i = 0; i <= 50; i++) {
        if (i % 2 == 0) {
            let pares = i
            resultado.innerHTML += `${pares} `
        }
    }
}

button.addEventListener('click', checkNumber)
