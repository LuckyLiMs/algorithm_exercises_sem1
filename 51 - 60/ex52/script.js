let button = document.querySelector('button')

button.addEventListener('click', function(){

    let conta = Number(document.querySelector('input#conta').value)
    let gorjeta = Number(document.querySelector('input#gorjeta').value)
    
    let total_a_pagar = total(conta,gorjeta)

    function total(valor_conta, porcentagem_gorjeta) {
        return  valor_conta + (valor_conta * ((porcentagem_gorjeta/100)))
    }
    
    pResultado = document.querySelector('p#r').innerText = `O valor total da conta é de R$:${conta}, a porcentagem desejada para a gorjeta é de ${gorjeta}%. Portanto, o total a ser pago é de R$:${total_a_pagar.toFixed(2)}.`

})
