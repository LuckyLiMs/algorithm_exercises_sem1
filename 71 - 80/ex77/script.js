let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let number = document.querySelector('input#number').value
    let sequencia = 0
    let texto = ``
    for (let i = 1; i <= 10; i++) {
        sequencia = number * i
        if (i < 10) {
            texto += `${sequencia}, `
        } else {
            texto += `${sequencia}`
        }
        console.log(sequencia)
    }
    resultado.innerHTML += texto
}

button.addEventListener('click', checkNumber)
