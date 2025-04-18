n1 = prompt('Insira um número')

Number(n1)

// BUSCAR FAZER SEM UTILIZAR MATH.POW, BORA FAZER NA MÃO AÍ VAMO

document.querySelector('p#r').innerText = `O número digitado foi ${n1} e seu valor elevado a 2 é ${Math.pow(n1,2)} a 3 é ${Math.pow(n1, 3)} a 4 é ${Math.pow(n1, 4)}, e a 5 é ${Math.pow(n1,5)}.`