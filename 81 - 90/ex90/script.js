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
    let soma = 0
    let somaPares = 0
    let par = 0

    for (let i = 0; i < numbersFiltrados.length; i++) {
        soma += numbersFiltrados[i]
        if (numbersFiltrados[i] % 2 == 0) {
            somaPares += numbersFiltrados[i]
            par++
        }
    }

    let media = soma/numbersFiltrados.length
    let mediaPares = somaPares/par

    resultado.innerHTML = `<br>A quantidade de números digitados é ${numbersFiltrados.length}. Esses números são ${numbersFiltrados}. A soma entre eles é ${soma}. A média é ${media.toFixed(2)} e a média dos pares é ${mediaPares.toFixed(2)}.`
}

button.addEventListener('click', calculate)