let button = document.querySelector('button')
let correctAnswer = document.querySelector('p#r')

function checkAnswer() {
    const alternatives = document.querySelectorAll(`[name='alternative']`)
    const labels = document.querySelectorAll(`[name='label']`)

    finalAnswer = null
    alternativeNumber = 0
    for (let i = 0; i < alternatives.length; i++) {
        if (alternatives[i].checked) {
            alternativeNumber = i
            finalAnswer = alternatives[alternativeNumber].value
            break
        }
    }

    for (let i = 0; i < labels.length; i++) {
        labels[i].style.border = '1px solid white'
    }

    if (finalAnswer == 'b') {
        labels[alternativeNumber].style.border = '2px solid green'
        console.log('correto')
        correctAnswer.innerHTML = `A resposta correta é a alternativa B. <br> Explicação: <br> O código contém um erro de sintaxe na linha if (numero % 2 = 0). O operador de comparação de igualdade deve ser === em vez de =. <br> Portanto, a linha correta deve ser if (numero % 2 === 0), para verificar se numero é divisível por 2 e, assim, determinar se é par ou ímpar. O código funcionará corretamente após a correção desse erro.`
    } else {
        labels[alternativeNumber].style.border = '2px solid red'
        console.log('errado')
        correctAnswer.innerHTML = `errado`
    }
}

button.addEventListener('click', checkAnswer)