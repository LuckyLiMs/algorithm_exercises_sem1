n1 = prompt('Insira um número')

Number(n1)

document.querySelector('p#r').innerText = `O número digitado foi ${n1}, sua raíz cúbica é ${Math.pow(n1, (1/3)).toFixed(2)}, e sua raíz quadrada é ${Math.pow(n1, (1/2)).toFixed(2)}.`