/* exported titleCase */

function capitalize(word) {
  var firstLetter = word[0];
  var firstLetterUpperCased = firstLetter.toUpperCase();
  var rest = word.slice(1);
  var lowercaseRest = rest.toLowerCase();
  return firstLetterUpperCased + lowercaseRest;
}

function allcaps(word) {
  return word.toUpperCase();
}

function notthese(string) {
  if (string === 'and' || string === 'or' || string === 'nor' || string === 'but' || string === 'a' || string === 'an' || string === 'the' || string === 'as' || string === 'at' || string === 'by' || string === 'for' || string === 'in' || string === 'of' || string === 'on' || string === 'per' || string === 'to') {
    return true;
  } return false;
}

function dashHandler(string) {
  const splitString = string.split('-');
  const dashOutput = [];
  for (var j = 0; j < splitString.length; j++) {
    dashOutput.push(capitalize(splitString[j]));
  }
  return dashOutput.join('-');
}

function titleCase(title) {
  const lowerCased = title.toLowerCase();
  const splitTitleArr = lowerCased.split(' ');
  const outputArr = [];
  for (var i = 0; i < splitTitleArr.length; i++) {
    if (splitTitleArr[i] === 'javascript:') {
      outputArr.push('JavaScript:');
      outputArr.push(capitalize(splitTitleArr[i + 1]));
      i++;
    } else if (splitTitleArr[i] === 'javascript') {
      outputArr.push('JavaScript');
    } else if (splitTitleArr[i] === 'api') {
      outputArr.push(allcaps(splitTitleArr[i]));
    } else if (i === 0) {
      outputArr.push(capitalize(splitTitleArr[i]));
    } else if (splitTitleArr[i].includes(':')) {
      outputArr.push(capitalize(splitTitleArr[i]));
      outputArr.push(capitalize(splitTitleArr[i + 1]));
      i++;
    } else if (splitTitleArr[i].includes('-')) {
      outputArr.push(dashHandler(splitTitleArr[i]));
    } else if (notthese(splitTitleArr[i]) === false) {
      outputArr.push(capitalize(splitTitleArr[i]));
    } else if (notthese(splitTitleArr[i]) === true) {
      outputArr.push(splitTitleArr[i]);
    }
  }
  return outputArr.join(' ');
}
