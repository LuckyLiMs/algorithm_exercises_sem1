let state = {
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    name_input: document.querySelector(`input#nome`),
    age_input: document.querySelector(`input#idade`),
}

let users = []

function sighin() {
    let user = {
        name: state.name_input.value,
        age: state.age_input.value,
    }
    console.log(user)

    if (user.name == `` || user.age == ``) {
        alert(`Insira os valores corretos`)
        return
    } else {
        users.push(user)
    }

    console.log(users)
    show()
}

function show() {
    state.output.innerHTML = ``

    for (let i = 0; i < users.length; i++){
        state.output.innerHTML += 
        `
        <div class="col-sm-6 mb-5 w-50">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Índice: #${i+1}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Nome: ${users[i].name}</h6>
                    <p class="card-text">Idade: ${users[i].age}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML = 
        `
            Total de pessoas cadastradas: ${users.length}
        `
    }
    cleanForm()
}

function cleanForm(){
    state.name_input.value = ``
    state.age_input.value = ``
    
    state.name_input.focus()
}

state.btn.addEventListener(`click`, sighin)