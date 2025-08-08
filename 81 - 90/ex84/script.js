let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculate() {
    
    let numberInput = document.querySelector('input#number')
    let number = Number(numberInput.value)

    if (number <= 0) {
        numberInput.style.border = `2px solid red`
        resultado.innerHTML = `Valores inválidos`
        return
    } else {
        numberInput.style.border = `2px solid #131313`
        desconto = number * 0.09

        resultado.innerHTML = `O valor do produto é ${number}, e o valor do desconto de 9% é ${desconto}. Portanto, o valor total fica em ${number - desconto}.`
    }
    
}

button.addEventListener('click', calculate)
