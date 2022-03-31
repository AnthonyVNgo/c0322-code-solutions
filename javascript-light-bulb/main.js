var buttonOn = document.querySelector('div.button-on');
var bgOn = document.querySelector('.bg-on');
var buttonOff;
var bgOff;

var button = false;

function buttonSwitch(event) {

  if (button === false) {
    buttonOn.className = 'button-off column-25 height-25 align-self-center border-radius-circle';
    bgOn.className = 'bg-off';
    button = true;

    buttonOff = document.querySelector('div.button-off');
    bgOff = document.querySelector('.bg-off');

  } else if (button === true) {
    bgOff.className = 'bg-on';
    buttonOff.className = 'button-on box-shadow column-25 height-25 align-self-center border-radius-circle';
    button = false;

  }
}

buttonOn.addEventListener('click', buttonSwitch);
