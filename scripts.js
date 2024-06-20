document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskName = document.getElementById('taskName').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskLabels = document.getElementById('taskLabels').value;
    
    addTask(taskName, taskDeadline, taskPriority, taskLabels);
    
    document.getElementById('taskForm').reset();
});

function addTask(name, deadline, priority, labels) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    
    taskItem.classList.add(`task-${priority}`);
    
    taskItem.innerHTML = `
        <div class="task-info">
            <h3>${name}</h3>
            <p>Deadline: ${deadline}</p>
            <p>Labels: ${labels}</p>
        </div>
        <div class="task-controls">
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    taskList.appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
