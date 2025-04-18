document.querySelector('p#r').innerText = 'a'

lanchePreco = 7.50
economizado = 3.20

document.querySelector('p#r').innerText = `Já foi economizado R$: ${economizado}, porém para comprar o lanche de R$: ${lanchePreco}, seria preciso de mais R$: ${lanchePreco - economizado}.`
