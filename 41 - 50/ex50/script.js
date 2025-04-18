let button = document.querySelector('button')

button.addEventListener('click', function () {

    let precos = document.querySelector('input#preco').value
    let preco = precos.split(" ")

    let preco1 = Number(preco[0])
    let preco2 = Number(preco[1])
    let preco3 = Number(preco[2])

    let precos_somados = preco1 + preco2 + preco3

    preco10 = preco_descontado(precos_somados, 0.10)
    preco20 = preco_descontado(precos_somados, 0.20)
    preco30 = preco_descontado(precos_somados, 0.30)
    preco50 = preco_descontado(precos_somados, 0.50)

    function preco_descontado(preco, desconto) {
        return preco - (preco * desconto)
    }

    pResultado = document.querySelector('p#r').innerHTML = `Os preços de cada produto são ${precos}, todos somados, são ${precos_somados}. Portanto, quando se aplica os descontos nesse valor, se obtém os seguintes valores: <br> Com o desconto de 10%, ${preco10}. <br> Com o desconto de 20%, ${preco20}. <br> Com o desconto de 30%, ${preco30}. <br> Com o desconto de 50%, ${preco50}.`

})
