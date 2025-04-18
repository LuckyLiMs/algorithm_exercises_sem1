numerosPrompt = prompt('Insira 4 números para calcular sua média ponderada, separados por espaço')
ns = numerosPrompt.split(" ")

n1 = ns[0]
n2 = ns[1]
n3 = ns[2]
n4 = ns[3]

console.log(`numeros ${ns}`)
console.log(`${ns[0]}`)
console.log(`${ns[1]}`)
console.log(`${ns[2]}`)
console.log(`${ns[3]}`)

pesos = [1,2,3,4]

p1 = pesos[0]
p2 = pesos[1]
p3 = pesos[2]
p4 = pesos[3]

console.log(`pesos ${pesos}`)

// AGORA PARA A MÉDIA PONDERADA

result = ((n1*p1)+(n2*p2)+(n3*p3)+(n4*p4))/(p1 + p2 + p3 + p4)


document.querySelector('p#r').innerText = `A média ponderada de ${ns}, é ${result}`