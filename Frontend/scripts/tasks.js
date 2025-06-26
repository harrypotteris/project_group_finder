const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTask");
const timeInput = document.getElementById("taskTime");

function addTask() {
  const text = newTaskInput.value.trim();
  const time = timeInput.value.trim();

  if (text === "") return;

  const task = document.createElement("div");
  task.className = "task";

  task.innerHTML = `
    <i class="far fa-circle complete-btn" onclick="markComplete(this)" title="Toggle Complete"></i>
    <div class="task-content">
      <strong>${text}</strong>
      ${time ? `Reminder: <b>${time}</b><br/>` : ""}
      <span class="badge pending">Pending</span>
    </div>
    <i class="fas fa-trash-alt delete-btn" onclick="removeTask(this)"></i>
  `;

  taskList.appendChild(task);
  newTaskInput.value = "";
  timeInput.value = "";
}

function markComplete(icon) {
  const task = icon.parentElement;
  const badge = task.querySelector(".badge");
  const isDone = task.classList.contains("done");

  if (isDone) {
    task.classList.remove("done");
    icon.classList.remove("fas", "fa-check-circle");
    icon.classList.add("far", "fa-circle");
    badge.textContent = "Pending";
    badge.className = "badge pending";
  } else {
    task.classList.add("done");
    icon.classList.remove("far", "fa-circle");
    icon.classList.add("fas", "fa-check-circle");
    badge.textContent = "Completed";
    badge.className = "badge completed";
  }
}

function removeTask(icon) {
  const task = icon.parentElement;
  task.remove();
}

function addTask() {
  const taskInput = document.getElementById("newTask");
  const dateTimeInput = document.getElementById("taskDateTime");

  const taskText = taskInput.value.trim();
  const taskDateTime = dateTimeInput.value;

  if (taskText === "" || taskDateTime === "") return;

  const formattedTime = new Date(taskDateTime).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const taskHTML = `
    <div class="task">
      <i class="far fa-circle complete-btn" onclick="markComplete(this)" title="Toggle Complete"></i>
      <div class="task-content">
        <strong>${taskText}</strong>
        Scheduled: <b>${formattedTime}</b><br />
        <span class="badge reminder">Reminder</span>
      </div>
      <i class="fas fa-trash-alt delete-btn" onclick="removeTask(this)"></i>
    </div>
  `;

  document.getElementById("taskList").innerHTML += taskHTML;

  taskInput.value = "";
  dateTimeInput.value = "";
}
