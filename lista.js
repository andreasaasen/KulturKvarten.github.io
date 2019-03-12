let checklist = document.getElementById('checklist');

let items = checklist.querySelectorAll('li');
let inputs = checklist.querySelectorAll('input');
let newLi = document.createElement('li');
let newSpan = document.createElement('span');
let newInput = document.createElement('input');
let newSpanText = document.createTextNode('Matvaror');

for(let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', editItem);
    inputs[i].addEventListener('blur', updateItem);
}

function editItem() {
    this.className = 'edit';
    let input = this.querySelector('input');
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = '';
    newLi.appendChild(newSpan); 
    newSpan.appendChild(newSpanText);
    newSpan.append(newInput);
    newInput.value
    .appendChild();
}