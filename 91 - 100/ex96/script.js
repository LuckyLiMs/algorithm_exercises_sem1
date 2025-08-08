let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    name_input: document.querySelector(`input#nome`),
    price_input: document.querySelector(`input#preco`),
    quantity_input: document.querySelector(`input#quantidade`),
    category_input: document.querySelector(`input#categoria`),
}

let exercise_index = 96
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let products = []

function register() {
    let product = {
        name: state.name_input.value,
        price: state.price_input.value,
        quantity: state.quantity_input.value,
        category: state.category_input.value,
    }
    console.log(product)

    if (product.title == `` || product.price == `` || product.quantity == `` || product.category == ``) {
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
    

    for (let i = 0; i < products.length; i++) {

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Título: ${products[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Autor: ${products[i].price}</h6>
                    <p class="card-text">Publicação: ${products[i].quantity}</p>
                    <p class="card-text">Páginas: ${products[i].category}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total cadastros: ${products.length}
        `
    }
    cleanForm()
}

function cleanForm() {
    state.name_input.value = ``
    state.price_input.value = ``
    state.quantity_input.value = ``
    state.category_input.value = ``

    state.name_input.focus()
}

state.btn.addEventListener(`click`, register)