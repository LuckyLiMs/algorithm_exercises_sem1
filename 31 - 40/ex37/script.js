let raio = Number(prompt('Insira o raio de alguma circunferência'))

// primeiro utilizarei a função Math.PI para fazer isso, mas a ideia é calcular o pi na mão rapaz, A MESMA COISA COM O MATH.POW, A IDEIA É FAZER POTENCIALIZAÇÃO NA MÃO RAPAZ

let A = (Math.PI * Math.pow(raio, 2)).toFixed(2)
let P = (2 * Math.PI * raio).toFixed(2)

pResultado = document.querySelector('p#r').innerText = `O raio inserido da circunferência é ${raio}, portanto, a Área dessa circunferência é ${A}, e o seu Perímetro é ${P}.`