var countdownElement = document.querySelector('.countdown-display');

function countdown() {
  countdownElement.textContent.replaceWith(countdownElement.textContent--);
}

var intervalID = setInterval(countdown, 1000);

function atZero() {
  countdownElement.textContent = '~Earth Beeeelooowww Us~';
  setTimeout(clearInterval(intervalID));
}

setTimeout(atZero, 5000);
