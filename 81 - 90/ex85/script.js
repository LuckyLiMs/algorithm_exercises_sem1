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
        let soma = 0
        for (let i = 0; i < numbersFiltrados.length; i++) {
            soma += numbersFiltrados[i]
        }

        if (soma > 10) {
            resultado.innerHTML = `<br>Os valores inseridos são ${numbersFiltrados}. Portanto, o resultado da sua adição é ${soma}, e o valor da raíz cúbica é ${(soma**(1/3)).toFixed(2)}.`
        }else{
            resultado.innerHTML = `<br>Os valores inseridos são ${numbersFiltrados}. Portanto, o resultado da sua adição é ${soma}.`
        }
    } else {
        resultado.innerHTML = `Valores inválidos`
    }


}

button.addEventListener('click', calculateArea)
