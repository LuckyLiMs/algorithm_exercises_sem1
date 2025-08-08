let button = document.querySelector('button')
let resultado = document.querySelector('p#r')
let resumo = document.querySelector('div#resumo')

let nome_input = document.querySelector('input#nome')
let number_input1 = document.querySelector('input#n1')
let number_input2 = document.querySelector('input#n2')

let alunos = []
function calculate() {
    let nome = nome_input.value
    let n1 = Number(number_input1.value)
    let n2 = Number(number_input2.value)
    let situacao = ``

    if (nome == '' || n1 == '' || n2 == '') {
        alert('Insira os dados corretos!')
        return
    }

    media = (n1 + n2) / 2

    if (media >= 7) {
        situacao = `Aprovado`
    } else {
        situacao = `Reprovado`
    }

    alunos.push({ nome, n1, n2, media, situacao })
    exibir(alunos)
}

function exibir(array) {
    resultado.innerHTML = ``
    resumo.innerHTML = ``
    let color = ``
    let aprovado = 0
    let reprovado = 0

    for (let i = 0; i < array.length; i++) {

        if (array[i].situacao == 'Aprovado') {
            color = `bg-success`
            aprovado++
        } else {
            color = `bg-danger`
            reprovado++
        }

        resultado.innerHTML +=
            `
        <div class="col-lg-12">
            <div class="card mb-3">
                <div class="card-body">
                    <p><strong>Nome:</strong> ${alunos[i].nome}</p>
                    <p><strong>Nota 01:</strong> ${alunos[i].n1}</p>
                    <p><strong>Nota 02:</strong> ${alunos[i].n2}</p>
                    <p><strong>Média:</strong> ${alunos[i].media}</p>
                </div>
                <div class="card-footer ${color} text-white">
                    ${alunos[i].situacao}
                </div>
            </div>
        </div>
        `

        resumo.innerHTML = `
        <p><strong>Quantidade de alunos aprovados: </strong>${aprovado}</p>
        <p><strong>Quantidade de alunos reprovados: </strong>${reprovado}</p>
        `
    }
}

button.addEventListener('click', calculate)