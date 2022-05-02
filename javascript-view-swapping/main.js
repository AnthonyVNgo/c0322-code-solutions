var tabContainer = document.querySelector('.tab-container');

var tabNodeList = document.querySelectorAll('.tab');

var viewNodeList = document.querySelectorAll('.view');

// console.log(tabNodeList);

function clickEvent(event) {

  // console.log(event.target);

  if (event.target.matches('.tab')) {

    for (var i = 0; i < tabNodeList.length; i++) {
      if (event.target === tabNodeList[i]) {
        tabNodeList[i].className = 'tab active';
      } else if (event.target !== tabNodeList[i]) {
        tabNodeList[i].className = 'tab';
      }
    }

    var dataViewAttr = event.target.getAttribute('data-view');
    // console.log(dataViewAttr);

    // console.log(viewNodeList);

    for (var j = 0; j < viewNodeList.length; j++) {
      if (viewNodeList[j].getAttribute('data-view') === dataViewAttr) {
        viewNodeList[j].className = 'view';
      } else viewNodeList[j].className = 'hidden';
    }

  }
}
tabContainer.addEventListener('click', clickEvent);
