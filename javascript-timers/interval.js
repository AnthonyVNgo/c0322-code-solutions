var countdownElement = document.querySelector('.countdown-display');
var startingNumber = 4;
var intervalID = setInterval(countdown, 1000);

function countdown() {
  // countdownElement.textContent.replaceWith(countdownElement.textContent--);
  if (startingNumber > 0) {
    countdownElement.textContent = startingNumber--;
  } else if (startingNumber === 0) {
    countdownElement.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }

}

// function atZero() {
//   countdownElement.textContent = '~Earth Beeeelooowww Us~';
//   setTimeout(clearInterval(intervalID));
// }

// setTimeout(atZero, 5000);
