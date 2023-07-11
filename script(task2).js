// Function for adding a new task to the queue.

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  
  if (task !== '') {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `<span>${task}</span><button onclick="deleteTask(this)">Delete</button>`;
    taskList.appendChild(newTask);
    input.value = '';
  }
}

// Function for deleting a existing task from the queue.

function deleteTask(button) {
  const task = button.parentNode;
  task.parentNode.removeChild(task);
}
