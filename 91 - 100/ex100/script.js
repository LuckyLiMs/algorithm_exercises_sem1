let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculate() {
    let numberInput = document.querySelector('input#number').value
    let number = numberInput.split(' ')
    let numbersFiltrados = []

    for (let i = 0; i < number.length; i++) {
        let item = number[i]
        if (item.trim() !== '') {
            numbersFiltrados.push(Number(item))
        }
    }

    if (numbersFiltrados.length === 2) {
        resultado.innerHTML = ``
        let soma = 0
        for (let i = 0; i < numbersFiltrados.length; i++) {
            if (numbersFiltrados[i] <= 0) {
                resultado.innerHTML = `Valores inválidos`
                return
            }
        }

        if (numbersFiltrados[0] > numbersFiltrados[1]) {
            let aux = numbersFiltrados[0]
            numbersFiltrados[0] = numbersFiltrados[1]
            numbersFiltrados[1] = aux
        }

        for (let i = numbersFiltrados[0]++; i < numbersFiltrados[1]; i++) {
            if (i % 2 === 0) {
                soma += i
            }
        }

        resultado.innerHTML = `<br>Os valores inseridos são ${--numbersFiltrados[0]} e ${numbersFiltrados[1]}. A soma dos pares entre os valores inseridos é ${soma}.`
    } else {
        resultado.innerHTML = `Valores inválidos`
    }
}

button.addEventListener('click', calculate)