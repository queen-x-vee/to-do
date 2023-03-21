// JavaScript code for handling the logic of the app
const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const task = input.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    const li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = '';
});
