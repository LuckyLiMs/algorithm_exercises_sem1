let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    name_input: document.querySelector(`input#nome`),
    position_input: document.querySelector(`input#posicao`),
    shirt_input: document.querySelector(`input#camisa`),
    age_input: document.querySelector(`input#idade`),
}

let exercise_index = 98
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let players = []

function register() {
    let player = {
        name: state.name_input.value,
        position: state.position_input.value,
        shirt: state.shirt_input.value,
        age: state.age_input.value,
    }
    console.log(player)

    if (player.name == `` || player.position == `` || player.shirt == `` || player.age == ``) {
        alert(`Insira os valores corretos`)
        return
    } else {
        players.push(player)
    }

    console.log(players)
    show()
}

function show() {
    state.output.innerHTML = ``
    let media_idade = 0
    let idade = 0
    let menos = 0
    let mais = 0

    for (let i = 0; i < players.length; i++) {

        idade += Number(players[i].age)
        media_idade = idade / Number(players.length)

        if (players[i].age < 20) {
            menos++
        } else {
            mais++
        }

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Jogador: ${players[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Posição: ${players[i].position}</h6>
                    <p class="card-text">Número da Camisa: ${players[i].shirt}</p>
                    <p class="card-text">Idade: ${players[i].age}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total de cadastros: ${players.length} <br>
            Média de idade da equipe: ${(media_idade).toFixed(2)} <br>
            Jogadores com menos de 20 anos: ${menos} | Jogadores com mais ou igual a 20 anos: ${mais}
        `
    }
    cleanForm()
}

function cleanForm() {
    state.name_input.value = ``
    state.position_input.value = ``
    state.shirt_input.value = ``
    state.age_input.value = ``

    state.name_input.focus()
}

state.btn.addEventListener(`click`, register)