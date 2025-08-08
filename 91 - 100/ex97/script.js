let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    name_input: document.querySelector(`input#descricao`),
    price_input: document.querySelector(`input#valor`),
    category_input: document.querySelector(`select#categoria`),
}

let exercise_index = 97
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let products = []

function register() {
    let product = {
        name: state.name_input.value,
        price: state.price_input.value,
        category: state.category_input.value,
    }
    console.log(product)

    if (product.title == `` || product.price == `` || product.category == ``) {
        alert(`Insira os valores corretos`)
        return
    } else {
        products.push(product)
    }

    console.log(products)
    show()
}

function show() {
    state.output.innerHTML = ``
    let despesas = 0
    

    for (let i = 0; i < products.length; i++) {

        despesas += Number(products[i].price)

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">#${i+1}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Valor: ${products[i].price}</h6>
                    <p class="card-text">Descrição: ${products[i].name}</p>
                    <p class="card-text">Categoria: ${products[i].category}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total cadastros: ${products.length} <br>
            Total de gasto no mês: ${despesas}
        `
    }
    cleanForm()
}

function cleanForm() {
    state.name_input.value = ``
    state.price_input.value = ``
    state.category_input.value = ``

    state.name_input.focus()
}

state.btn.addEventListener(`click`, register)