var taskList = document.querySelector('.task-list');

function clickFunction(event) {
  console.log(event.target);
  console.log(event.target.tagName);

  var button = document.querySelector('button');

  if (event.target === button) {
    var closestAncestor = event.target.closest('.task-list-item');
    console.log(closestAncestor);
    closestAncestor.remove();
  }
}

taskList.addEventListener('click', clickFunction);
