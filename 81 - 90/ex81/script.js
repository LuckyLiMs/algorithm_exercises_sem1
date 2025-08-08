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

    if (numbersFiltrados.length === 5) {
        let quadrado = 0
        let quadrados = []
        resultado.innerHTML = ``
        for (let i = 0; i < numbersFiltrados.length; i++) {
            quadrado = numbersFiltrados[i] ** 2
            quadrados.push(quadrado)
        }
        resultado.innerHTML += `<br>Os números inseridos foram: ${numbersFiltrados}.<br> E o quadrado desses mesmos é ${quadrados}.`
    } else {
        resultado.innerHTML = `coloca os número certo aí cara pelo amor de Deus.`
    }


}

button.addEventListener('click', checkNumber)
