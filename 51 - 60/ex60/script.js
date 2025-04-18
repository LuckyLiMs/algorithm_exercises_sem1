let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

button.addEventListener('click', function () {

    let numeros = document.querySelector('input#number').value

    let numero = numeros.split(' ')

    let h = Number(numero[0])
    let b = Number(numero[1])

    if (h > 0 && b > 0) {

        let A = (b * h) / 2
        let hipotenusa = Math.sqrt(h ** 2 + b ** 2)

        resultado.innerHTML = `A área do triângulo é ${A}. E a sua hipotenusa é ${hipotenusa.toFixed(2)}.`
    }else{
        resultado.innerHTML = `Digite um número que seja maior que 0.`
    }

})
