let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {
    soma = 0
    for (let i = 0; i <= 100; i++) {
        soma += i
    }
    resultado.innerHTML = `${soma}`
}

button.addEventListener('click', checkNumber)
