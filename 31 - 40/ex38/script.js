let lados = prompt('Insira os lados A, B e C de um paralelepípedo, separados por um espaço.')

let ls = lados.split(" ")

lA = ls[0]
lB = ls[1]
lC = ls[2]

let V = lA * lB * lC

pResultado = document.querySelector('p#r').innerText = `Os lados desse paralelepípedo são: ${ls}. E o seu Volume é ${V}.`