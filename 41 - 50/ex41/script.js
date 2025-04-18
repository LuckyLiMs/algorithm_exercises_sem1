let promptRaios = prompt('Insira o raio da circunferência menor, depois o da circunferência maior.Separados por um espaço.')

let rs = promptRaios.split(" ")

let r = rs[0]
let R = rs[1]

let a = Math.PI * Math.pow(r,2)
let A = Math.PI * Math.pow(R,2)

let aTotal = A + a

pResultado = document.querySelector('p#r').innerText = `O raio da circunferência menor é ${r} e sua área é ${a.toFixed(2)}, da maior é ${R} e sua área ${A.toFixed(2)}. O total das áreas é de ${aTotal.toFixed(2)}.`