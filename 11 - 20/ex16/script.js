n1 = 3
n2 = 9

ps = document.getElementsByTagName('p')

ps[1].innerText = `Os números digitados foram ${n1} e ${n2}`
ps[2].innerText = `A soma dos números ${n1} e ${n2} é ${n1 + n2}`
ps[3].innerText = `A subtração dos números ${n1} e ${n2} é ${n1 - n2}`
ps[4].innerText = `A multiplicação dos números ${n1} e ${n2} é ${n1 * n2}`
ps[5].innerText = `A divisão dos números ${n1} e ${n2} é ${n1 / n2}`
ps[6].innerText = `A divisão dos números ${n1} e ${n2} é ${(n1 + n2)/2}`