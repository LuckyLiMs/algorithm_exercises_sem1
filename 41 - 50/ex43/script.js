let raio = prompt('Insira o raio da esfera.')

let A = formula(raio,2)
let V = formula(raio,3)/3

function formula(raio, potencia) {
    return 4 * Math.PI * Math.pow(raio,potencia) 
}

pResultado = document.querySelector('p#r').innerText = `O raio da esfera é ${raio}. Portanto, sua Área é ${A.toFixed(2)}, e seu Volume é ${V.toFixed(2)}.`