let promptDimensoes = prompt('Insira uma base e uma altura para o triângulo. Separados por um espaço.')

let ds = promptDimensoes.split(" ")

let b = ds[0]
let a = ds[1]

let A = (b*a)/2

let V = A * a

pResultado = document.querySelector('p#r').innerText = `A base do triângulo é ${b}, e sua altura é ${a}. Portanto, sua área é ${A.toFixed(2)}, e seu volume é ${V.toFixed(2)}.`