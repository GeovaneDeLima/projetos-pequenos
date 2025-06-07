const icon = document.getElementById('icon')
const exc = document.getElementById('exc') 

icon.addEventListener('click', aparecer)

function aparecer(){
    exc.style.display = 'block'
}