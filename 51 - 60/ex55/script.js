let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checarInput() {
    let elementoNome = document.querySelector('input#nome')
    let elementoIdade = document.querySelector('input#idade')
    let nome = elementoNome.value
    let idade = Number(elementoIdade.value)

    if (nome.trim() === '' && (idade < 0 || idade == '')) {
        changeBorder(elementoNome, 'red')
        changeBorder(elementoIdade, 'red')
    } else {
        if (nome.trim() === '') {
            changeBorder(elementoNome, 'red')
            changeBorder(elementoIdade, 'black')
        }

        if (idade < 0 || idade == '') {
            changeBorder(elementoNome, 'black')
            changeBorder(elementoIdade, 'red')
        }

        if (nome.trim() !== '' && (idade > 0 && idade !== '')) {
            resultado.innerHTML = `O nome é ${nome}, e a idade é ${idade}.`

            changeBorder(elementoNome, 'black')
            changeBorder(elementoIdade, 'black')
        }
    }
}

function changeBorder(element, color) {
    element.style.border = `1px solid ${color}`
}

button.addEventListener(`click`, checarInput)