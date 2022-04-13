var countdownElement = document.querySelector('.countdown-display');
var startingNumber = 4;

function countdown() {
  // countdownElement.textContent.replaceWith(countdownElement.textContent--);
  countdownElement.textContent = startingNumber--;
}

var intervalID = setInterval(countdown, 1000);

function atZero() {
  countdownElement.textContent = '~Earth Beeeelooowww Us~';
  setTimeout(clearInterval(intervalID));
}

setTimeout(atZero, 5000);
