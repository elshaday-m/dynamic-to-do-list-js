document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // false = don't save again
  }

  // Save tasks array to Local Storage
  function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach((li) => {
      tasks.push(li.firstChild.textContent); // firstChild is the text node
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Add a new task (taskText optional when loading)
  function addTask(taskText = null, save = true) {
    const text = taskText || taskInput.value.trim();

    if (text === "") {
      alert("Please enter a task!");
      return;
    }

    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = text;

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task event
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      saveTasks();
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    if (save) saveTasks(); // Save to Local Storage only if needed
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") addTask();
  });

  // Initialize
  loadTasks();
});
