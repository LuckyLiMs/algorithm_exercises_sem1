let promptDimencoes = prompt('Insira a base menor, depois a base maior, e por fim a altura de um trapézio qualquer.Separados por um espaço.')

let ds = promptDimencoes.split(" ")

let b = ds[0]
let B = ds[1]
let h = ds[2]

let A = ((b+B)*h)/2

pResultado = document.querySelector('p#r').innerText = `Os lados desse paralelepípedo são: ${ds}. E o sua Área é ${A.toFixed(2)}.`