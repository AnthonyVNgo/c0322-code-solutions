var pElement = document.querySelector('.change-me');
var pElementText = pElement.textContent;
var pElementTextSplit = pElementText.split('');
var container = document.querySelector('.text-column');
container.childNodes[0].remove();
pElement.remove();

for (var j = 0; j < pElementTextSplit.length; j++) {
  var spanElement = document.createElement('span');
  spanElement.textContent = pElementTextSplit[j].charAt(0);
  container.appendChild(spanElement);
}

var i = 0;
container.childNodes[i + 1].className = 'underline';

function matchKeys(event) {
  var key = event.key;
  if (key !== pElementTextSplit[i]) {
    container.childNodes[i + 1].className = 'red';
  } else if (key === pElementTextSplit[i]) {
    container.childNodes[i + 1].className = 'green';
    i++;
    container.childNodes[i + 1].className = 'underline';
  }

}

document.addEventListener('keydown', matchKeys);
