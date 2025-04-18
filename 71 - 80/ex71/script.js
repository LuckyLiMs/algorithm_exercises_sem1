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

    if (finalAnswer == 'c') {
        labels[alternativeNumber].style.border = '2px solid green'
        console.log('correto')
        correctAnswer.innerHTML = `A resposta correta é a alternativa C. <br> Explicação: <br> O código começa com estoqueProdutoA inicializado como 10. Em seguida, ele decrementa estoqueProdutoA subtraindo 3 unidades e depois mais 2 unidades. Portanto, após essas operações, estoqueProdutoA será igual a 5. O valor impresso no console será "Quantidade de Produto A em estoque: 5"`
    } else {
        labels[alternativeNumber].style.border = '2px solid red'
        console.log('errado')
        correctAnswer.innerHTML = `errado`
    }
}

button.addEventListener('click', checkAnswer)