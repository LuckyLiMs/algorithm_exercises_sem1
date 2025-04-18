let button = document.querySelector('button')

button.addEventListener('click', function(){

    let altura_do_degrau = document.querySelector('input#degrau').value
    let altura_do_alcance = document.querySelector('input#alcance').value
    
    let quantidade_de_degraus = altura_do_alcance / altura_do_degrau

    console.log(altura_do_degrau, altura_do_alcance, quantidade_de_degraus)
    
    pResultado = document.querySelector('p#r').innerText = `A altura de cada degrau é de ${altura_do_degrau} cm, e a altura a ser atingida para alcançar o fim é de ${altura_do_alcance} cm. Portanto, a quantidade de degraus a serem subidos é de ${quantidade_de_degraus}.`

})
