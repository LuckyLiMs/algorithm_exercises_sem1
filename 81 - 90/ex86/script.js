let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

let number_input = document.querySelector('input#number')

function calculate() {
    let numberInput = number_input.value
    let number = numberInput.split(' ')
    let numbersFiltrados = []

    for (let i = 0; i < number.length; i++) {
        let item = number[i]
        if (item.trim() !== '') {
            numbersFiltrados.push(Number(item))
        }
    }

    resultado.innerHTML = ``
    let maior = numbersFiltrados[0]
    let menor = numbersFiltrados[0]
    for (let i = 0; i < numbersFiltrados.length; i++) {
        if (maior < numbersFiltrados[i]) {
            maior = numbersFiltrados[i]
        } else if (menor > numbersFiltrados[i]){
            menor = numbersFiltrados[i]
        }
    }

    resultado.innerHTML = `<br>Os valores inseridos são ${numbersFiltrados}. Portanto, o maior valor dentre esses é ${maior}, e o menor é ${menor}.`
}

number_input.addEventListener('input', calculate)