var buttonOn = document.querySelector('div.button-on');
var bgOn = document.querySelector('.bg-on');
var buttonOff;
var bgOff;

// console.log(buttonOn);
// console.log(bgOn);

var button = 0;

function buttonSwitch(event) {

  if (button === 0) {
    buttonOn.className = 'button-off column-25 height-25 align-self-center border-radius-circle';
    bgOn.className = 'bg-off';
    button++;
    // console.log(button);

    buttonOff = document.querySelector('div.button-off');
    bgOff = document.querySelector('.bg-off');
    // console.log(buttonOff);
    // console.log(bgOff);
  } else if (button === 1) {
    bgOff.className = 'bg-on';
    buttonOff.className = 'button-on box-shadow column-25 height-25 align-self-center border-radius-circle';
    button--;
    // console.log(button);
  }
}

buttonOn.addEventListener('click', buttonSwitch);

// console.log(buttonOff);
// console.log(bgOff);

// function buttonSwitchOff(event) {
//   buttonOff.className = 'button-on column-25 height-25 align-self-center border-radius-circle';
//   bgOff.className = 'bg-on';
// }

// if (bgOff.classList.contains('bg-off')) {
//   bgOff.className = 'bg-on';
// }

// function buttonSwitchReverse(event) {
//   buttonOff.className = 'button-on column-25 height-25 align-self-center border-radius-circle';
//   bgOff.className = 'bg-on';
// }
