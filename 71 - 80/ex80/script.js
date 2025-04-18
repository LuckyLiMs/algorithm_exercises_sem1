let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let numberInput = document.querySelector('input#number').value
    let number = numberInput.split(' ')
    let numbersFiltrados = []

    for (let i = 0; i < number.length; i++) {
        let item = number[i]
        if (item.trim() !== '') {
            numbersFiltrados.push(Number(item))
        }
    }

    if (numbersFiltrados.length === 10) {
        let positivo = 0
        let neutro = 0
        let negativo = 0
        for (let i = 0; i < numbersFiltrados.length; i++) {
            numberVerified = numbersFiltrados[i]
            if (numberVerified == 0) {
                neutro++
            } else if (numberVerified > 0) {
                positivo++
            } else {
                negativo++
            }
        }
        resultado.innerHTML += `<br>Os números inseridos foram: ${numbersFiltrados}.<br> A quantidade de números positivos é ${positivo}.<br> De neutros é ${neutro}.<br> E de negativos é ${negativo}.`
    } else {
        resultado.innerHTML = `coloca os número certo aí cara pelo amor de Deus.`
    }


}

button.addEventListener('click', checkNumber)
