let promptDimensoes = prompt('Insira um raio e uma altura para um cilindro qualquer, separados por espaço.')

let dimensoes = promptDimensoes.split(' ')

let raio = dimensoes[0]
let altura = dimensoes[1]

let aCircunferencia = Math.PI*Math.pow(raio,2)

let aBase = aCircunferencia

let V = aBase * altura

pResultado = document.querySelector('p#r').innerText = `O raio da circunferência insrido é ${raio} e a altura para o cilindro é ${altura}. Portanto, o volume do cilindro correspondende é de ${V.toFixed(2)}.`