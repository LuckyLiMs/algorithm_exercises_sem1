let btn = document.querySelector(`button`)
let r = document.querySelector(`p#r`)
let num_input = document.querySelector(`input#number`)

function calculate() {
    let num = num_input.value

    if(num != null){
        if(num > 0){
            r.innerHTML = `O número digitado foi ${num}, e sua raíz quadrada é ${(num**(1/2)).toFixed(2)}`
        }else{
            r.innerHTML = `O número digitado foi ${num}, e seu valor elevado ao quadrado é ${(num**2).toFixed(2)}`
        }
    }
}

btn.addEventListener(`click`, calculate)