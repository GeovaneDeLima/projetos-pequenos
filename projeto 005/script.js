const but = document.getElementById('but')
const n = document.getElementById('num')
const main = document.getElementsByTagName('main')[0]

let anum  
but.addEventListener('click', vernumero)

function criandonumero(){
    anum = Math.floor(Math.random() * (100 - 1)) + 1
}
function vernumero (){
    msg.style.display = 'block'
    criandonumero()
    let num = Number(n.value)
    const msg = document.createElement('section') 
    msg.classList.add('mensagem')
    main.appendChild(msg)
    
    if (n.value == ""){
        alert('Adicione um número primeiro!')   
    }else if (num > anum){
        msg.innerHTML = 'Número muito alto'
    }else if (num < anum) {
        msg.innerHTML = 'Número muito baixo'
    }else if (num == anum) {
        msg.innerHTML = 'Parabens você acertou!'
    }
}