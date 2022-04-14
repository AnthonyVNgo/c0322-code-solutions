var leftButtonElement = document.querySelector('#left');
var rightButtonElement = document.querySelector('#right');
var centerElement = document.querySelector('#center');
var dotsContainerElement = document.querySelector('#dots');
var currentID = 0;

function Pokemon(name, url) {
  this.nameKey = name;
  this.urlKey = url;
}

var bulbasaur = new Pokemon('Bulbasaur', 'images/001.png');
var charmander = new Pokemon('Charmander', 'images/004.png');
var squirtle = new Pokemon('Squirtle', 'images/007.png');

var imageArr = [bulbasaur, charmander, squirtle];

var intervalID = setInterval(autoNextImage, 3000);

for (var i = 0; i < imageArr.length; i++) {
  var dotElements = document.createElement('i');
  dotElements.className = 'fa-circle-dot fa-solid';
  dotsContainerElement.appendChild(dotElements);
}

// prev next functions

function previousImage(event) {
  if (currentID === 0) {
    currentID = imageArr.length - 1;
    // console.log(currentID);
    centerElement.src = imageArr[currentID].urlKey;
  } else {
    currentID--;
    // console.log(currentID);
    centerElement.textContent = currentID;
    centerElement.src = imageArr[currentID].urlKey;
  }
  stopNextImage();
  restartNextImage();
  // setTimeout(restartNextImage, 0);
}

leftButtonElement.addEventListener('click', previousImage);

function autoNextImage(event) {

  if (currentID === imageArr.length - 1) {
    currentID = 0;
    // console.log(currentID);
    centerElement.textContent = currentID;
    centerElement.src = imageArr[currentID].urlKey;
  } else {
    currentID++;
    // console.log(currentID);
    centerElement.textContent = currentID;
    centerElement.src = imageArr[currentID].urlKey;
  }
}

function nextImage() {
  autoNextImage();
  stopNextImage();
  restartNextImage();
  // setTimeout(restartNextImage, 0);
}

rightButtonElement.addEventListener('click', nextImage);

function stopNextImage() {
  clearInterval(intervalID);
}

function restartNextImage() {
  intervalID = setInterval(autoNextImage, 3000);
}

function dotsClick(event) {
  // console.log(event.target.tagName);
  if (event.target.tagName === 'I') {
    // console.log(true);
  }
  // event.target.className = 'fa-circle fa-solid';

}

dotsContainerElement.addEventListener('click', dotsClick);
