let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let number = document.querySelector('input#number').value

    if (number > 0) {
        if (number % 2 == 0) {
            resultado.innerHTML = `O número ${number} é PAR.`
        } else {
            resultado.innerHTML = `O número ${number} é ÍMPAR.`
        }
    }else{
        resultado.innerHTML = `Coloca um número maior que zero aí cara po não sabe ler não?`
    }

}

button.addEventListener('click', checkNumber)
