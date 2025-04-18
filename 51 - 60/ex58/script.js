let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNota() {
    let elementoNotas = document.querySelector('input#notas')
    let notas = elementoNotas.value

    let nota = notas.split(' ')
    let soma = 0

    for (let i = 0; i < nota.length; i++) {
        soma += Number(nota[i])
    }

    let mediaAritmetica = soma / nota.length
    console.log(nota, '|||', soma, '|||', mediaAritmetica)

    verifySituation(mediaAritmetica, nota)
}

function verifySituation(mediaAritmetica, nota) {
    if (mediaAritmetica >= 7.50) {
        resultado.style.border = `1px solid black`
        resultado.innerHTML = `Suas notas foram ${nota}. Portanto, sua média é <span style='color: green'>${mediaAritmetica.toFixed(2)}</span>. E você está aprovado !`
    } else {
        resultado.style.border = `1px solid red`
        resultado.innerHTML = `Suas notas foram ${nota}. Portanto, sua média é <span style='color: red'>${mediaAritmetica.toFixed(2)}</span>. E você está reprovado !`
    }
}

button.addEventListener('click', checkNota)