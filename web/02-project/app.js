const item = document.querySelector('.item')
const itemtwo = document.querySelector('.itemtwo')
const playceholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

itemtwo.addEventListener('dragstart', dragstart)
itemtwo.addEventListener('dragend', dragend)

for(const placeholder of playceholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}
