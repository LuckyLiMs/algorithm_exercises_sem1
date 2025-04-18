let button = document.querySelector('button')

button.addEventListener('click', function(){
    let salario = document.querySelector('input#salario').value
    let kw_gasto = document.querySelector('input#kw_gasto').value
    
    let valor_kw = (salario * (1/7)) / kw_gasto
    let valor_pago = valor_kw * kw_gasto
    let valor_pago_descontado = valor_pago - (valor_pago * 0.10)
    
    pResultado = document.querySelector('p#r').innerText = `O valor em reais de cada quilowatt é de ${valor_kw.toFixed(2)}, portanto, o valor a ser pago SEM o desconto é de ${valor_pago.toFixed(2)}, e COM o desconto, será de ${valor_pago_descontado.toFixed(2)}.`
})
