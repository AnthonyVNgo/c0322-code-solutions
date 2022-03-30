var modal = document.querySelector('.modal');

// console.log(modal);

var popup = document.querySelector('.display-none');

// console.log(popup);

var click = 0;

function clicker(event) {
  if (click === 0) {
    popup.className = 'card';
    click++;
  } else if (click !== 0) {
    popup.className = 'display-none';
    click--;
  }
}

modal.addEventListener('click', clicker);

var noButton = document.querySelector('.no');
// console.log(noButton);

function close(event) {
  if (click !== 0) {
    popup.className = 'display-none';
    click--;
  }
}

noButton.addEventListener('click', close);
