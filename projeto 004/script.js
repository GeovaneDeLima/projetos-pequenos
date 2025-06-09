const text = document.getElementById('add') 
const butadd = document.getElementById('butadd')
let tarefa = []


butadd.addEventListener('click', adicionar)


function adicionar (){
    tarefa.push(text.value)
    let ultimat = tarefa.at(-1)
    
    const article = document.getElementById('article')
    const div = document.createElement('div')
    const nome = document.createElement('p')
    const but = document.createElement('span')
    
    div.classList.add('tarefa')
    nome.classList.add('nome')
    but.classList.add('material-symbols-outlined')

    article.appendChild(div)
    div.appendChild(nome)
    div.appendChild(but)

    nome.innerHTML = ultimat
    but.innerHTML = 'delete'
    
    nome.addEventListener('click', () => {nome.style.textDecoration = 'line-through'})
    
    but.addEventListener('click', () => {div.remove()})
}
