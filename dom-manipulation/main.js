// 4
var clicks = 0;

// 5
var hotButton = document.querySelector('.hot-button');

// 6
var clickCount = document.querySelector('.click-count');

function clickIncrement(event) {
  clicks++;
  clickCount.textContent = clicks;

  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks >= 4 && clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks >= 7 && clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicks >= 10 && clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks >= 13 && clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
}

hotButton.addEventListener('click', clickIncrement);
