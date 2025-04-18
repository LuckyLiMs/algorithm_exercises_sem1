valorTotal = Number(prompt('Insira o valor todal da conta do restaurante.'))
percentGorjeta = Number(prompt('Insira o percentual da gorgeta.'))

document.querySelector('p#r').innerText = `O valor total foi ${valorTotal}, o percentual da gorjeta foi ${percentGorjeta}. E o valor total a ser pago é ${valorTotal + valorTotal * (percentGorjeta / 100)}`