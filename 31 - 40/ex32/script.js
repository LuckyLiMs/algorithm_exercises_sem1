document.querySelector('p#r').innerText = `O código possui como erro a linha do console.log, que ao demonstrar o resultado, não concatena sua variável, assim impossibilitando a impressão do código. Segue abaixo uma simulação real do código acima funcional.`

n1 = 10
n2 = 5
res = n1 + n2

document.querySelector('p#res').innerText = `${n1} + ${n2} = ${res}`