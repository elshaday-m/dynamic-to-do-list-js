// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select essential DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get input text and remove extra spaces

    // If the input field is empty, alert the user
    if (taskText === "") {
      alert("Please enter a task before adding!");
      return;
    }

    // Create a new list item for the task
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add event to remove the task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Add the new task to the list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // Add task when "Add Task" button is clicked
  addButton.addEventListener("click", addTask);

  // Allow pressing "Enter" key to add a task
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
