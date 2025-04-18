let button = document.querySelector('button')

button.addEventListener('click', function () {

    let salario = Number(document.querySelector('input#salario').value)
    let aumento = salario * 0.25
    let salario_aumentado = salario + aumento

    console.log(salario, aumento, salario_aumentado)
    pResultado = document.querySelector('p#r').innerText = `O salário atual é de ${salario}, e o aumento é de 25%, ou seja, nesse caso seria ${aumento}. Portanto, com o aumento, seu salário vai para ${salario_aumentado}.`

})
