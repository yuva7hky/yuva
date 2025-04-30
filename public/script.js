const socket = io("https://private-chat-e19j.onrender.com");
const input = document.getElementById('messageInput');
const messages = document.getElementById('messages');

function sendMessage() {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', msg);
    input.value = '';
  }
}

socket.on('chat message', function(msg) {
  const li = document.createElement('li');
  li.textContent = msg;
  messages.appendChild(li);
});