let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

function checkNumber() {

    let number = Number(document.querySelector('input#number').value)
    
    resultado.innerHTML = ``
    resultado.innerHTML += `${number}! = `

    let fatorial = 1
    let texto = ''
    for (let i = number; i > 0; i--) {
        fatorial *= i
        if (1>i) {
            texto += `${i} x `
        }else{
            texto += `${i} = `
        }
    }
    texto += fatorial
    resultado.innerHTML += texto
    // resultado.innerHTML += `<br> RESULTADO = ${fatorial}`

}

button.addEventListener('click', checkNumber)
