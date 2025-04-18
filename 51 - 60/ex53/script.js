let button = document.querySelector('button')
pResultado = document.querySelector('p#r')

button.addEventListener('click', function(){

    let numero = Number(document.querySelector('input#number').value)
    
    if (numero%2 == 0) {
        pResultado.innerHTML = `<p style=""></p>`
    }
    
    pResultado = document.querySelector('p#r').innerText = `O valor total da conta é de R$:${conta}, a porcentagem desejada para a gorjeta é de ${gorjeta}%. Portanto, o total a ser pago é de R$:${total_a_pagar.toFixed(2)}.`

})
