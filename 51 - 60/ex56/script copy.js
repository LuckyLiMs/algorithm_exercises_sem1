let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

button.addEventListener('click', function () {

    let elementoNotas = document.querySelector('input#notas')
    let notas = elementoNotas.value
    let nota = notas.split(' ').filter(nota => nota.trim() !== '')

    nota.forEach(nota => {

        if (nota > 10 || nota < 0 || nota.trim() === '') {
            elementoNotas.style.border = `1px solid red`
        } else {
            calculateMedia(notas)
            elementoNotas.style.border = `1px solid black`
        }

    });

})

function calculateMedia(arrayNota) {

    arrayNotas = arrayNota.split(' ').filter(arrayNota => arrayNota.trim() !== '')

    let soma = 0
    for (let i = 0; i < arrayNotas.length; i++) {
        soma += Number(arrayNotas[i]);
    }
    console.log(arrayNotas)

    let media = (soma / arrayNotas.length).toFixed(2)

    if (media >= 7) {
        resultado.innerHTML = `As notas são ${arrayNotas}, portanto, a média é <span style='color:green'>${media}</span>, e você está aprovado.`
    } else if (media < 5) {
        resultado.innerHTML = `As notas são ${arrayNotas}, portanto, a média é <span style='color:red'>${media}</span>, e você está reprovado.`
    } else {
        resultado.innerHTML = `As notas são ${arrayNotas}, portanto, a média é <span style='color:yellow'>${media}</span>, e você está em recuperação.`
    }

}