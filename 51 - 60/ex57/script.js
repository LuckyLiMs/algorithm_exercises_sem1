let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNota() {
    let elementoNotas = document.querySelector('input#notas')
    let notas = elementoNotas.value

    let nota = notas.split(' ')
    let produto = 0, somaPeso = 0
    let pesos = [3, 5, 6, 6]

    for (let i = 0; i < nota.length; i++) {
        produto += Number(nota[i]) * Number(pesos[i])
        somaPeso += Number(pesos[i])
    }
    let mediaPonderada = produto / somaPeso
    console.log(produto, somaPeso, '|||', mediaPonderada)

    verifySituation(mediaPonderada, nota)
}

function verifySituation(mediaPonderada, nota) {
    if (mediaPonderada > 6) {
        resultado.style.border = `1px solid black`
        resultado.innerHTML = `Suas notas foram ${nota}. Portanto, sua média é <span style='color: green'>${mediaPonderada}</span>. E você está aprovado !`
    } else {
        resultado.style.border = `1px solid red`
        resultado.innerHTML = `Suas notas foram ${nota}. Portanto, sua média é <span style='color: red'>${mediaPonderada}</span>. E você está reprovado !`
    }
}

button.addEventListener('click', checkNota)