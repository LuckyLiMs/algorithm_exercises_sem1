let state = {
    btn: document.querySelector('button#btn'),
    r: document.querySelector('div#r'),
    resumo: document.querySelector('div#resumo'),
    nome_input: document.querySelector('input#nome'),
    idade_input: document.querySelector('input#idade'),
    email_input: document.querySelector('input#email'),
    estado_select: document.querySelector('select#estado'),
}

let users = []

function cadastro() {
    let user = {
        nome: state.nome_input.value,
        idade: state.idade_input.value,
        email: state.email_input.value,
        estado: state.estado_select.value,
    }
    console.log(user)

    if (user.nome == '' || user.idade == '' || user.estado == '') {
        alert('Insira os valores corretos')
        return
    }else{
        users.push(user)
    }

    console.log(users)

    exibe()
}

function exibe() {
    state.r.innerHTML = ''
    sp = 0
    mg = 0
    rj = 0
    for (let i = 0; i < users.length; i++) {

        if (users[i].estado == 'SP') {
            sp++
        } else if (users[i].estado == 'MG') {
            mg++
        } else {
            rj++
        }

        state.r.innerHTML +=
            `
                <div class="card mb-3">
                <div class="card-body">
                <div class=""><strong>Nome:</strong> ${users[i].nome}</div>
                <div class=""><strong>Idade: </strong> ${users[i].idade}</div>
                <div class=""><strong>Email: </strong> ${users[i].email}</div>
                <div class=""><strong>Estado: </strong> ${users[i].estado}</div>
                </div>
                </div>
            `

        state.resumo.innerHTML =
            `
                <div class=""><strong>Total de cadastros:</strong> ${users.length}</div>
                <div class=""><strong>SP: </strong> ${sp}</div>
                <div class=""><strong>MG: </strong> ${mg}</div>
                <div class=""><strong>RJ: </strong> ${rj}</div>
                </div>
            `
    }
    limpar()
}

function limpar() {
    state.nome_input.value = ''
    state.idade_input.value = ''
    state.email_input.value = ''

    document.querySelector('input#nome').focus()
}

state.btn.addEventListener('click', cadastro)
