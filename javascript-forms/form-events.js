function handleFocus(event) {
  console.log(event + 'was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log(event + 'was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var userName = document.querySelector('#user-name');
console.log(userName);

var userEmail = document.querySelector('#user-email');
console.log(userEmail);

var userMessage = document.querySelector('#user-message');
console.log(userMessage);

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

userMessage.addEventListener('focus', handleFocus);
userMessage.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);
