function addTodo() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    const taskText = input.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle done status on click
    li.onclick = () => {
    li.classList.toggle('done');
    };

    // Add delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.className = 'delete-btn';
    delBtn.onclick = (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
    input.value = '';
}