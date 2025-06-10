const text = document.getElementById('add') 
const butadd = document.getElementById('butadd')
const article = document.getElementById('article')
let tarefa = []
let feitos = []



butadd.addEventListener('click', adicionar)


function adicionar (){
    if (text.value == ''){
        alert('Escreva uma tarefa para adicionar')
    }else {
        let novatarefa = {
            nome: text.value,
            feito: false
        }
        tarefa.push(novatarefa)

        const div = document.createElement('div')
        const nome = document.createElement('p')
        const concl = document.createElement('p')
        const icon = document.createElement('span')
        
        div.classList.add('tarefa')
        concl.classList.add('concluir')
        nome.classList.add('nome')
        icon.classList.add('material-symbols-outlined')

        article.appendChild(div)
        div.appendChild(concl)
        div.appendChild(nome)
        div.appendChild(icon)
        
        concl.innerHTML = '---'
        nome.innerHTML= novatarefa.nome
        icon.innerHTML = 'delete'
        
        concl.onclick = function(){
            marcarcomofeita(i)
        }
        
    }
}
function marcar()
