var pElement = document.querySelector('.change-me');
// console.log('The text content of the p element:', pElement.textContent);

var pElementText = pElement.textContent;
// console.log('pElement.textContent is assigned to the variable pElement and returns the value:', pElementText);

var pElementTextSplit = pElementText.split('');
// console.log('the split method of the pElementText object is called and the return of the method is assigned to the variable, pElementTextSplit:', pElementTextSplit);
// console.log('the length of pElementTextSplit:', pElementTextSplit.length);

var container = document.querySelector('.text-column');

// console.log('container.childNodes value:', container.childNodes);
// console.log('container.childNodes[0] value:', container.childNodes[0]);
container.childNodes[0].remove();

// loop

for (var j = 0; j < pElementTextSplit.length; j++) {
  var spanElement = document.createElement('span');
  spanElement.textContent = pElementTextSplit[j].charAt(0);
  // console.log(spanElement.textContent);
  container.appendChild(spanElement);
  pElement.remove();
}

// what is my container.childnodes???? wtf
// event function

var i = 0;

function matchKeys(event) {
  var key = event.key;
  // console.log(key);

  if (key !== pElementTextSplit[i]) {
    // console.log(false);
    container.childNodes[i + 1].className = 'red';
  } else if (key === pElementTextSplit[i]) {
    // console.log(true);
    // console.log(i);
    container.childNodes[i + 1].className = 'green';
    i++;
  }

}

document.addEventListener('keydown', matchKeys);
