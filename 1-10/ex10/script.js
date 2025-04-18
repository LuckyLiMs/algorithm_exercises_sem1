res = document.querySelector('p#res')

nome = 'Lucas'
sobrenome = 'Siqueira'
idade = 18

// res.innerText = 'Meu nome é ' + nome + ' ' + sobrenome + ' e tenho ' + idade + ' anos.'

// Utilizando Template String
res.innerText = `Meu nome é ${nome} ${sobrenome}, e tenho ${idade} anos.`