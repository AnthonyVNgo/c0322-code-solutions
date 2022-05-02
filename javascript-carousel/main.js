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
var pikachu = new Pokemon('Pikachu', 'images/025.png');
var jiggly = new Pokemon('JigglyPuff', 'images/039.png');

var imageArr = [bulbasaur, charmander, squirtle, pikachu, jiggly];
var dotsArr = [];

var intervalID = setInterval(autoNextImage, 3000);

for (var i = 0; i < imageArr.length; i++) {
  var dotElements = document.createElement('i');
  dotElements.className = 'fa-circle-dot fa-solid';
  dotElements.setAttribute('data-id', 0);
  dotsContainerElement.appendChild(dotElements);
  dotsArr.push(dotElements);
}

// prev next functions

function previousImage(event) {
  if (currentID === 0) {
    currentID = imageArr.length - 1;
    centerElement.src = imageArr[currentID].urlKey;
  } else {
    currentID--;
    centerElement.textContent = currentID;
    centerElement.src = imageArr[currentID].urlKey;
  }
  movingDots();
  stopNextImage();
  restartNextImage();
}

leftButtonElement.addEventListener('click', previousImage);

function autoNextImage(event) {

  if (currentID === imageArr.length - 1) {
    currentID = 0;
    centerElement.src = imageArr[currentID].urlKey;
  } else {
    currentID++;
    centerElement.src = imageArr[currentID].urlKey;
  }
  movingDots();
}

function nextImage() {
  autoNextImage();
  stopNextImage();
  restartNextImage();
}

rightButtonElement.addEventListener('click', nextImage);

function stopNextImage() {
  clearInterval(intervalID);
}

function restartNextImage() {
  intervalID = setInterval(autoNextImage, 3000);
}

function dotsClick(event) {

  if (event.target.tagName === 'I') {
    currentID = dotsArr.indexOf(event.target);
    centerElement.src = imageArr[currentID].urlKey;
    movingDots();
    stopNextImage();
    restartNextImage();
  }
}

dotsContainerElement.addEventListener('click', dotsClick);

function movingDots() {
  for (var i = 0; i < dotsContainerElement.children.length; i++) {
    dotsContainerElement.children[i].className = 'fa-circle-dot fa-solid';

    if (currentID === i) {
      dotsContainerElement.children[currentID].className = 'fa-circle fa-solid';
    }
  }
}
