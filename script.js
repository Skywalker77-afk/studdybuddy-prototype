function loginUser() {
  let username = document.getElementById('username').value;
  if (username.trim() !== '') {
    alert('Welcome, ' + username + '!');
    window.location.href = 'dashboard.html';
    return false;
  } else {
    alert('Please enter your username.');
    return false;
  }
}

function sendMessage() {
  let input = document.getElementById('chatInput');
  let msg = input.value;
  if (msg.trim() !== '') {
    let chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;  // auto-scroll
  }
}