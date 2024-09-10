// script.js
function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task');
        return;
    }

    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${todoText}</span>
        <button onclick="toggleComplete(this)">Complete</button>
        <button class="delete" onclick="deleteTodo(this)">Delete</button>
    `;
    
    todoList.appendChild(li);
    input.value = '';
}

function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
}

function deleteTodo(button) {
    const li = button.parentElement;
    li.remove();
}
