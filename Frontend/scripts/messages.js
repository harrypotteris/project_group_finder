let currentGroup = '';
const chatBox = document.getElementById('chatBox');
const groupTitle = document.getElementById('groupTitle');
const input = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

const sampleChats = {
  smart: [
    { sender: 'Charitha', text: 'Hey team, have you all tried setting up OpenCV?' },
    { sender: 'You', text: 'Yes! Just installed it. Will try integrating with Flask next.' },
    { sender: 'Ankit', text: 'Let’s have a short call tomorrow to sync up.' }
  ],
  ai: [
    { sender: 'Raj', text: 'Can someone review my career suggestion model?' },
    { sender: 'You', text: 'Yes, I’ll go through it this evening.' },
    { sender: 'Sneha', text: 'Same here!' }
  ],
  health: [
    { sender: 'You', text: 'Let’s work on chatbot intents today.' },
    { sender: 'Aarav', text: 'Agreed, starting now.' }
  ],
  robotics: [
    { sender: 'You', text: 'We need to finalize the PID values.' },
    { sender: 'Deepa', text: 'Will do tests this weekend!' }
  ],
  design: [
    { sender: 'You', text: 'Anyone has wireframes for the onboarding screen?' },
    { sender: 'Maya', text: 'Shared on Figma just now!' }
  ]
};

function openChat(group, event) {
  currentGroup = group;
  chatBox.innerHTML = '';
  groupTitle.textContent = event.currentTarget.innerText;

  document.querySelectorAll('.group-list li').forEach(li => li.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const chats = sampleChats[group];
  chats.forEach(msg => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.classList.add(msg.sender === 'You' ? 'you' : 'sender');
    div.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text}`;
    chatBox.appendChild(div);
  });

  input.disabled = false;
  sendBtn.disabled = false;
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();
  if (!text || !currentGroup) return;

  const div = document.createElement('div');
  div.classList.add('message', 'you');
  div.innerHTML = `<strong>You:</strong> ${text}`;
  chatBox.appendChild(div);
  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}
