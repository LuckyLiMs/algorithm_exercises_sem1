let button = document.querySelector('button')

button.addEventListener('click', function () {

    let notas = document.querySelector('input#nota').value
    let nota = notas.split(" ").map(Number)

    let soma = 0
    for (let i = 0; i < nota.length; i++) {
        soma += nota[i]
    }

    let media_aritmetica = soma / nota.length

    pResultado = document.querySelector('p#r').innerHTML = `As notas inseridas são ${notas}, e portanto, a média aritmética é ${media_aritmetica}.`

    // let nota1 = Number(nota[0])
    // let nota2 = Number(nota[1])
    // let nota3 = Number(nota[2])
    // let nota4 = Number(nota[3])
    // let nota5 = Number(nota[4])

    // let media_aritmetica = (nota1 + nota2 + nota3 + nota4 + nota5) / nota.length

})
