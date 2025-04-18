livroPreco = Number(prompt(`Insira o preço do livro`))
// desconto = (10 / 100) * livroPreco
desconto = 0.10 * livroPreco

document.querySelector('p#r').innerText = `O preço do livro escolhido é de ${livroPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. O desconto é de 10%, o total a ser pago é R$: ${(livroPreco - desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`