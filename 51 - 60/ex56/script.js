let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNota() {

    let elementoNotas = document.querySelector('input#notas')
    let notasValue = elementoNotas.value
    let nota = notasValue.split(' ')

    saida = ''
    let soma = 0

    if (nota.length !== 2) {
        resultado.innerHTML = `erro`
        elementoNotas.style.border = `1px solid red`
        return
    }

    for (let i = 0; i < nota.length; i++) {
        let number = Number(nota[i]);

        if (number < 0 || number > 10) {
            elementoNotas.style.border = `1px solid red`
            resultado.innerHTML = `erro`
            return
        } else {
            soma += number
            elementoNotas.style.border = `1px solid black`
        }
    }

    calculateMedia(soma, nota.length, nota)
    // resultado.innerHTML = `Média: ${calculateMedia(soma, nota.length, nota).toFixed(2)}`
}

function calculateMedia(soma, arrayNota, nota) {
    let media = soma / arrayNota

    if (media >= 7) {
        return resultado.innerHTML = `Suas notas são ${nota}, e sua média é <span style='color:green'>${media}</span>. Portanto, Você está aprovado.`
    } else if (media < 5) {
        return resultado.innerHTML = `Suas notas são ${nota}, e sua média é <span style='color:red'>${media}</span>. Portanto, Você está reprovado.`
    } else {
        return resultado.innerHTML = `Suas notas são ${nota}, e sua média é <span style='color:yellow'>${media}</span>. Portanto, Você está em recuperação.`
    }

    // return media
}

button.addEventListener('click', checkNota)

// resultado.innerHTML = ``
// saida += `${numberSplited} `
// resultado.innerHTML = `${calculateMedia(soma, nota.length)}`

// function calculateMedia(arrayNota) {

//     let soma = 0
//     for (let i = 0; i < arrayNota.length; i++) {
//         soma += Number(arrayNota[i]);
//     }
//     let media = soma / arrayNota.length
//     // console.log(media)

//     if (media >= 7) {
//         resultado.innerHTML = `As notas são ${arrayNota}, portanto, a média é <span style='color:green'>${media}</span>, e você está aprovado.`
//     } else if (media < 5) {
//         resultado.innerHTML = `As notas são ${arrayNota}, portanto, a média é <span style='color:red'>${media}</span>, e você está reprovado.`
//     } else {
//         resultado.innerHTML = `As notas são ${arrayNota}, portanto, a média é <span style='color:yellow'>${media}</span>, e você está em recuperação.`
//     }

// }