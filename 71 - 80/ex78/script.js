let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    for (let i = 0; i <= 20; i++) {
        if (i % 2 == 0) {
            resultado.innerHTML += `O número ${i} é PAR.<br>`
        } else {
            resultado.innerHTML += `O número ${i} é ÍMPAR.<br>`
        }
    }

}

button.addEventListener('click', checkNumber)
