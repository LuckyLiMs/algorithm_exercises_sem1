let state = {
    title: document.querySelector(`h1#title`),
    btn: document.querySelector(`button`),
    output: document.querySelector(`div#list-cadastro`),
    resume: document.querySelector(`div#resumo-cadastro`),
    title_input: document.querySelector(`input#titulo`),
    author_input: document.querySelector(`input#autor`),
    date_input: document.querySelector(`input#data`),
    page_input: document.querySelector(`input#pagina`),
}

let exercise_index = 95
state.title.innerHTML = `${exercise_index}`
document.title = `Exercício ${exercise_index}`

let books = []

function register() {
    let book = {
        title: state.title_input.value,
        author: state.author_input.value,
        date: state.date_input.value,
        page: state.page_input.value,
    }
    console.log(book)

    if (book.title == `` || book.author == `` || book.date == `` || book.page == ``) {
        alert(`Insira os valores corretos`)
        repage
    } else {
        books.push(book)
    }

    console.log(books)
    show()
}

function show() {
    state.output.innerHTML = ``
    

    for (let i = 0; i < books.length; i++) {

        state.output.innerHTML +=
            `
        <div class="col-sm-4 mb-5">
            <div class="card w-100">
                <div class="card-body">
                    <h5 class="card-title">Título: ${books[i].title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Autor: ${books[i].author}</h6>
                    <p class="card-text">Publicação: ${books[i].date}</p>
                    <p class="card-text">Páginas: ${books[i].page}</p>
                </div>
            </div>
        <div>
        `

        state.resume.innerHTML =
            `
            Total cadastros: ${books.length}
        `
    }
    cleanForm()
}

function cleanForm() {
    state.title_input.value = ``
    state.author_input.value = ``
    state.date_input.value = ``
    state.page_input.value = ``

    state.title_input.focus()
}

state.btn.addEventListener(`click`, register)