let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    name_input: document.querySelector(`input#nome`),
    age_input: document.querySelector(`input#idade`),
    course_select: document.querySelector(`select#curso`),
    turn_select: document.querySelector(`select#turno`),
}

let exercise_index = 105
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let users = []

function register() {
    let user = {
        name: state.name_input.value,
        age: state.age_input.value,
        course: state.course_select.value,
        turn: state.turn_select.value,
    }
    console.log(user)

    if (user.name == `` || user.age == `` || user.course == `` || user.turn == ``) {
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
    // courses
    adm = 0
    inf = 0
    eng = 0
    // turns
    man = 0
    tar = 0
    noi = 0

    for (let i = 0; i < users.length; i++) {
        
        // courses
        if (users[i].course == `administracao`) {
            adm++
        } else if (users[i].course == `informatica`) {
            inf++
        } else {
            eng++
        }
        
        // turns
        if (users[i].turn == `manha`) {
            man++
        } else if (users[i].turn == `tarde`) {
            tar++
        } else {
            noi++
        }

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Nome do Aluno: ${users[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Idade: ${users[i].age}</h6>
                    <p class="card-text">Curso: ${users[i].course}</p>
                    <p class="card-text">Turno: ${users[i].turn}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total cadastros: ${users.length} <br>
            Por Turno: <br>
            Manhã: ${man} | Tarde: ${tar} | Noite: ${noi} <br>
            Por Curso:<br>
            Administração: ${adm} | Informática: ${inf} | Engenharia: ${eng} 
        `
    }
    cleanForm()
}

function cleanForm() {
    state.name_input.value = ``
    state.age_input.value = ``
    state.course_select.value = ``
    state.turn_select.value = ``

    state.name_input.focus()
}

state.btn.addEventListener(`click`, register)