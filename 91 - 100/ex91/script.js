let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function calculate() {
    let resultado_texto = ``
    let soma = 0

    for (let i = 0; i <= 1000; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultado_texto += `${i} + `
            soma += i
        }
    }

    resultado_texto = resultado_texto.slice(0, -3)
    resultado_texto += ` = ${soma}.`
    resultado.innerHTML = resultado_texto
}

button.addEventListener('click', calculate)