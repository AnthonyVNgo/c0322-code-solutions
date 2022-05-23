const responsePromise = fetch('https://jsonplaceholder.typicode.com/users');
const dataPromise = responsePromise.then(response => {
  if (response.ok) {
    console.log('Fetch Successful');
    return response.json();
  } else {
    console.log('Fetch Unsuccessful');
  }
});
dataPromise.then(data => console.log(data));
responsePromise.catch(error => console.log(error));
