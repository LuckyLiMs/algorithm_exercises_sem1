let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function comparar() {
    let numeros = document.querySelector('input#numeros').value

    let numero = numeros.split(" ")

    let n1 = Number(numero[0])
    let n2 = Number(numero[1])

    let maior, menor

    if (numeros.trim() !== "") {
        if (n1 > n2) {
            maior = `<span style='color:blue'>${n1}</span>`
            menor = `${n2}`
        } else {
            maior = `<span style='color:blue'>${n2}</span>`
            menor = `${n1}`
        }
        resultado.innerHTML = `Os números digitados foram: ${numeros}, o maior número é ${maior}, e o menor é ${menor}.`
    } else {
        resultado.innerHTML = `Poxa cara coloca os números aí po não sabe ler não ?`
    }

}

button.addEventListener(`click`, comparar)
