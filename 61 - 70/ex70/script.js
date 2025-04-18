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

    if (finalAnswer == 'd') {
        labels[alternativeNumber].style.border = '2px solid green'
        console.log('correto')
        correctAnswer.innerHTML = `A resposta correta é a alternativa D. <br> Explicação: <br> O código começa com itensVendidos inicializado como 0. Em seguida, ele incrementa itensVendidos adicionando 3 e depois mais 2. Portanto, após essas operações, itensVendidos será igual a 5. O valor impresso no console será "Itens vendidos: 5".`
    } else {
        labels[alternativeNumber].style.border = '2px solid red'
        console.log('errado')
        correctAnswer.innerHTML = `errado`
    }
}

button.addEventListener('click', checkAnswer)