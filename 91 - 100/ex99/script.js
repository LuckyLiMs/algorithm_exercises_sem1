let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    description_input: document.querySelector(`input#descricao`),
    responsable_input: document.querySelector(`input#responsavel`),
    due_input: document.querySelector(`input#prazo`),
    status_select: document.querySelector(`select#status`),
}

let exercise_index = 99
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let activities = []

function register() {
    let activity = {
        description: state.description_input.value,
        responsable: state.responsable_input.value,
        due: state.due_input.value,
        status: state.status_select.value,
    }
    console.log(activity)

    if (activity.title == `` || activity.responsable == `` || activity.due == `` || activity.status == ``) {
        alert(`Insira os valores corretos`)
        return
    } else {
        activities.push(activity)
    }

    console.log(activities)
    show()
}

function show() {
    state.output.innerHTML = ``
    let pendentes = 0

    for (let i = 0; i < activities.length; i++) {

        if (activities[i].status == `pendente`) {
            pendentes++
        }

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">#${i+1}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Responsável: ${activities[i].responsable}</h6>
                    <p class="card-text">Descrição: ${activities[i].description}</p>
                    <p class="card-text">Prazo: ${activities[i].due}</p>
                    <p class="card-text">Status: ${activities[i].status}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total de cadastros: ${activities.length} <br>
            Total de pendências: ${pendentes}
        `
    }
    cleanForm()
}

function cleanForm() {
    state.description_input.value = ``
    state.responsable_input.value = ``
    state.due_input.value = ``
    state.status_select.value = ``

    state.description_input.focus()
}

state.btn.addEventListener(`click`, register)