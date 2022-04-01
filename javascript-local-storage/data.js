/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

// function eventFunction(event) {
//   var todosJSON = JSON.stringify(todos);
//   localStorage.setItem('javascript-local-storage', todosJSON);
// }

// window.addEventListener('beforeunload', eventFunction);

// function removeItem(event) {

// }

// .addEventListener('dblclick')

var listContainer = document.querySelector('#todo-list');

function hideFunction(event) {
  // console.log(event.target);
  // console.log(event.target.tagName);

  if (event.target.tagName === 'LABEL' || event.target.tagName === 'INPUT') {
    var closestAncestor = event.target.closest('.list-group-item');
    closestAncestor.remove();
  }
}

listContainer.addEventListener('dblclick', hideFunction);
