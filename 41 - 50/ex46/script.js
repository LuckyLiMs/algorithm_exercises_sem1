let button = document.querySelector('button')

button.addEventListener('click', function(){

    let C = document.querySelector('input#gCelcius').value
    let F = C*(9.0/5.0)+32.0
    
    console.log(C, F)
    
    pResultado = document.querySelector('p#r').innerText = `A temperatura em graus Celcius é de ${C}. E a em Fahrenheit é de ${F.toFixed(2)}.`

})
