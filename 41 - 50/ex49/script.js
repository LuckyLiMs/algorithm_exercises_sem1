let button = document.querySelector('button')

button.addEventListener('click', function () {

    let peso = Number(document.querySelector('input#peso').value)
    let altura = Number(document.querySelector('input#altura').value)

    let IMC = peso / (altura * altura)

    if (IMC > 0) {
        pResultado = document.querySelector('p#r').innerText = `O peso inserido é ${peso.toFixed(2)} kg, a altura é ${altura.toFixed(2)} m. Portanto, o IMC calculado é de ${IMC.toFixed(2)}.`

    } else {
        pResultado = document.querySelector('p#r').innerText = `Insere os dados certos mlk ta tudo 0 aí.`
    }
})
