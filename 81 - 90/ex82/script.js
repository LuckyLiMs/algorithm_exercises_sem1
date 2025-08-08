let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculateArea() {

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
        for (let i = 0; i < numbersFiltrados.length; i++) {
            if (numbersFiltrados[i] <= 0) {
                resultado.innerHTML = `Valores inválidos`
            }
        }
        let D = numbersFiltrados[0]
        let d = numbersFiltrados[1]
        let area = (D * d)/2

        resultado.innerHTML += `<br>Os valores inseridos são ${D} e ${d}.A área do losango de acordo com os valores inseridos é ${area}.`
    } else {
        resultado.innerHTML = `Valores inválidos`
    }


}

button.addEventListener('click', calculateArea)
