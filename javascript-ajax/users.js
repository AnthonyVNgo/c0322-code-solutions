var userListElement = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
// xhr represents the X-ml H-ttp R-equest

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.open() is a method for the XHR object, which is the object that handles browser requests
// xhr.open() is used to send a request to a server
// this is part one of two of how AJAX works (request and response)
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);

  var users = xhr.response;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user);
    var li = document.createElement('li');
    li.textContent = user.name;
    userListElement.appendChild(li);
  }
});

xhr.send();
