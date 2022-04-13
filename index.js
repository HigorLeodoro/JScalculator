const screen = document.querySelector('#items')
const result = document.querySelector('#result')

function insert(value){
    items.innerHTML += value
}

function clean(){
    items.innerHTML = ''
}

function backspace(){
    if(items.textContent){
        let result = document.getElementById('items').innerHTML
        items.innerHTML = result.substring(0, result.length -1)
    }
}

function equal(){
    if(items.textContent != 'Erro'){
        document.getElementById('items').innerHTML = eval(items.innerHTML)
    }
}