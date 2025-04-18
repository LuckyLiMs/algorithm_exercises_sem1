let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

button.addEventListener('click', function () {

    let numerosInput = document.querySelector('input#number').value

    let numeros = numerosInput.split(' ')

    let numerosLimpos = []
    for (let i = 0; i < numeros.length; i++) {
        let item = numeros[i];
        if (item.trim() !== '') {
            numerosLimpos.push(Number(item))
        }
    }

    if (numerosLimpos.length === 3) {
        let somaQuadrado = 0
        for (let i = 0; i < numerosLimpos.length; i++) {
            let quadrado = numerosLimpos[i] ** 2
            somaQuadrado += quadrado
        }
        resultado.innerHTML = `Os valores inseridos foram: ${numeros}. <br> Portanto, a soma dos quadrados dos mesmos é de: ${somaQuadrado}.`
    } else {
        resultado.innerHTML = `CARACA CARA JÁ FORAM 65 EXERCÍCIOS COLOCA A DESGRAÇA DOS NÚMEROS CERTO PELO AMOR DE DEUS`
    }

})
