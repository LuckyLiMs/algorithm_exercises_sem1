let button = document.querySelector('button')
let resultado = document.querySelector('p#r')

button.addEventListener('click', function () {

    let numeros = document.querySelector('input#number').value

    let arrayNumero = numeros.split(' ')

    // let arrayNumeroFiltrado = arrayNumero.filter(item => item.trim() !== '');

    let arrayNumeroFiltrado = []
    for (let i = 0; i < arrayNumero.length; i++) {
        let item = arrayNumero[i]
        if (item.trim() !== '') {
            arrayNumeroFiltrado.push(Number(item))
            console.log(arrayNumeroFiltrado)
        }
    }
    
    if (arrayNumeroFiltrado.length === 3) {
        let maiorNumero = arrayNumeroFiltrado[0]
        resultado.innerHTML = ``
        for (let i = 0; i < arrayNumeroFiltrado.length; i++) {
            if (arrayNumeroFiltrado[i] < 0) {
                resultado.innerHTML += `[${arrayNumeroFiltrado[i]}] Negativo, `
                console.log('negativo')
            } else if (arrayNumeroFiltrado[i] > 0) {
                resultado.innerHTML += `[${arrayNumeroFiltrado[i]}] Positivo, `
                console.log('positivo')
            } else {
                resultado.innerHTML += `[${arrayNumeroFiltrado[i]}] Nulo, `
                console.log('nulo')
            }

            if (arrayNumeroFiltrado[i] > maiorNumero) {
                maiorNumero = arrayNumeroFiltrado[i]
            }
        }
        resultado.innerHTML += `<br>O maior número é: [${maiorNumero}]`
    } else {
        resultado.innerHTML = `Coloca número aí cara pelamor.`
        console.log('coloca número aí cara')
    }
})
