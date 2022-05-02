var modal = document.querySelector('.modal');

var popup = document.querySelector('.display-none');

var click = false;

function clicker(event) {
  if (click === false) {
    popup.className = 'card';
    click = true;
  }
}

modal.addEventListener('click', clicker);

var noButton = document.querySelector('.no');

function close(event) {
  if (click === true) {
    popup.className = 'display-none';
    click = false;
  }
}

noButton.addEventListener('click', close);
