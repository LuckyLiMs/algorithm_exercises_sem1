let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    brand_input: document.querySelector(`input#marca`),
    model_input: document.querySelector(`input#modelo`),
    year_input: document.querySelector(`input#ano`),
    color_select: document.querySelector(`select#cor`),
}

let exercise_index = 104 
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let cars = []

function register() {
    let car = {
        brand: state.brand_input.value,
        model: state.model_input.value,
        year: state.year_input.value,
        color: state.color_select.value,
    }
    console.log(car)

    if (car.brand == `` || car.model == `` || car.year == `` || car.color == ``) {
        alert(`Insira os valores corretos`)
        return
    } else {
        cars.push(car)
    }

    console.log(cars)
    show()
}

function show() {
    state.output.innerHTML = ``
    red = 0
    black = 0
    white = 0

    for (let i = 0; i < cars.length; i++){

        if(cars[i].color == `vermelho`){
            red++
        }else if(cars[i].color == `preto`){
            black++
        }else{
            white++
        }

        state.output.innerHTML += 
        `
        <div class="col-sm-12 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Modelo: ${cars[i].model}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Marca: ${cars[i].brand}</h6>
                    <p class="card-text">Ano: ${cars[i].year}</p>
                    <p class="card-text">Cor: ${cars[i].color}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML = 
        `
            Total cadastros: ${cars.length} <br>
            Vermelho: ${red} | Preto: ${black} | Branco: ${white}
        `
    }
    cleanForm()
}

function cleanForm(){
    state.brand_input.value = ``
    state.model_input.value = ``
    state.year_input.value = ``
    state.color_select.value = ``
    
    state.brand_input.focus()
}

state.btn.addEventListener(`click`, register)