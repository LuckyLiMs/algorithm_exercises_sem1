let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let notaInput = document.querySelector('input#number').value
    let notas = notaInput.split(' ')
    let notasFiltradas = []

    for (let i = 0; i < notas.length; i++) {
        let item = notas[i]
        if (item.trim() !== '') {
            notasFiltradas.push(Number(item))
        }
    }

    if (notasFiltradas.length === 5) {
        let soma = 0
        let media = 0
        for (let i = 0; i < notasFiltradas.length; i++) {
            soma += notasFiltradas[i]
            media = (soma / notasFiltradas.length).toFixed(2)
        }
        resultado.innerHTML = `As notas inseridas foram: ${notasFiltradas}.<br>Portanto a média é ${media}.`
    } else {
        resultado.innerHTML = `cara coloca as nota certa pelo amor de Deus.`
    }


}

button.addEventListener('click', checkNumber)
