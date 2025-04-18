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
        correctAnswer.innerHTML = `A resposta correta é a alternativa D. <br> Explicação: <br> O código começa com numCliques inicializado como 0. Em seguida, ele incrementa numCliques usando o operador ++ (que incrementa o valor em 1) e depois adiciona 2 ao valor de numCliques usando += 2. Portanto, após essas operações, numCliques será igual a 3. O valor impresso no console será "Número de cliques: 3".`
    } else {
        labels[alternativeNumber].style.border = '2px solid red'
        console.log('errado')
        correctAnswer.innerHTML = `errado`
    }
}

button.addEventListener('click', checkAnswer)