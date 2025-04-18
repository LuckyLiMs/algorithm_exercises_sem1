let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let number = Number(document.querySelector('input#number').value)

    if (number > 0) {
        if (number % 2 == 0) {
            resultado.innerHTML = `
            O número digitado foi ${number}.<br>
            Seu valor elevado ao quadrado é ${elevar(number, 2)}.<br>
            Seu valor elevado ao cubo é ${elevar(number, 3)}.<br>
            Seu valor elevado a sétima é ${elevar(number, 7)}.
            `
        } else {
            resultado.innerHTML = `
            O número digitado foi ${number}.<br>
            Sua raíz quadrada é ${elevar(number, (1 / 2))}.<br>
            Sua raíz cúbica é ${elevar(number, (1 / 3))}.<br>
            Sua raíz sétima é ${elevar(number, (1 / 7))}.
            `
        }
    } else {
        resultado.innerHTML = `Coloca um número maior que zero aí cara po não sabe ler não?`
    }

}

function elevar(number, expoente) {
    return (number ** expoente).toFixed(2)
}

button.addEventListener('click', checkNumber)
