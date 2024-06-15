document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const taskText = input.value.trim();
            if (taskText !== '') {
                addTask(taskText);
                input.value = '';
            }
        }
    });

    const addTask = (taskText) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);

        taskSpan.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        todoList.appendChild(li);
    };
});
