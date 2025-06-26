function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

function sendJoinRequest(button, projectName) {
  if (button.disabled) return;

  // Simulate sending a request (can be replaced with fetch/ajax)
  alert(`Request to join "${projectName}" sent!`);

  // Disable button and update text
  button.innerText = "Requested ✓";
  button.disabled = true;
}
