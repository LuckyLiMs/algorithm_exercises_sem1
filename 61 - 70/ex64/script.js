let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

button.addEventListener('click', function () {

    let numeros = document.querySelector('input#number').value

    let numero = numeros.split(' ')
    let soma = 0

    let numerosFiltrados = []
    for (let i = 0; i < numero.length; i++) {
        let item = numero[i];
        if (item.trim() !== '') {
            numerosFiltrados.push(Number(item))
        }
    }

    if (numerosFiltrados.length === 2) {
        for (let i = 0; i < numerosFiltrados.length; i++) {
            soma += Number(numerosFiltrados[i])
        }

        if (soma > 10) {
            resultado.innerHTML = `Os números digitados foram: ${numerosFiltrados}. <br> O valor da adição é de ${soma}. <br> E sua raíz cúbica é ${(soma ** (1 / 3)).toFixed(2)}`
        } else {
            resultado.innerHTML = `Os números digitados foram: ${numerosFiltrados}. <br> O valor da adição é de ${soma}.`
        }

    } else {
        resultado.innerHTML = `Po coloca os número aí cara, lê o que to pedindo.`
    }


})
