res = document.querySelector('p#res')
n1 = 0
sequencia = []

for (let i = 0; i < 10; i++) {
    n1++
    sequencia.push(n1)
    res.innerText = sequencia
}