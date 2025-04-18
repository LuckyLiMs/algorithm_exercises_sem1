let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function getNumber() {
    let number = Number(document.querySelector('input#number').value)

    if (number % 2 == 0) {
        resultado.innerHTML = `O número é ${number}. Portanto, o resultado será ${verifyNumber(number, 2)}. `
    } else {
        resultado.innerHTML = `O número é ${number}. Portanto, o resultado será ${verifyNumber(number, 3)}. `
    }
}

function verifyNumber(number, expoente) {
    return number ** expoente
}

button.addEventListener('click', getNumber)