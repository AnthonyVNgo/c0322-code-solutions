var messageElement = document.querySelector('.message');
// messageElement.textContent = 'Hello There';

function replaceText() {
  messageElement.textContent = 'Hello There';
}

setTimeout(replaceText, 2000);
