let currentCount = 3;
const myInterval = setInterval(hello, 1000);

function hello() {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('bye');
    clearInterval(myInterval);
  }
}

console.log(myInterval);
