var taskList = document.querySelector('.task-list');

function clickFunction(event) {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var closestAncestor = event.target.closest('.task-list-item');
    closestAncestor.remove();
  }
}

taskList.addEventListener('click', clickFunction);
