document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const existingTasks = ['Sample Task 1', 'Sample Task 2', 'Sample Task 3'];

    console.log("DOM fully loaded and parsed");
    console.log("Initial tasks:", existingTasks);

    function renderTasks() {
        taskList.innerHTML = '';
        existingTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                existingTasks.splice(index, 1);
                renderTasks();
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
        });
        console.log("Tasks rendered:", existingTasks);
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        existingTasks.push(taskText);
        renderTasks();

        taskInput.value = '';
        taskInput.focus();
        console.log("Task added:", taskText);
    }

    addTaskButton.addEventListener('click', addTask);

    renderTasks();
});
