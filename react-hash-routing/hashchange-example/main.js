var $tabs = document.querySelectorAll('.tab');
// a nodelist is returned with all of the <a> tags containing class="tab" (lines 14,15,16)

var $views = document.querySelectorAll('.view');
// a nodelist is returned with all of the <div> tags containing the class view (lines 19,34,48)

showView(window.location.hash);
// the showView function is called with the hash property of the location property of the window object passed as an argument

window.addEventListener('hashchange', function (event) {
  showView(window.location.hash);
});

function showView(newHash) {

  console.log('newHash:', newHash);
  console.log('window.location.hash:', window.location.hash);
  // why just var instead of const or let ?
  var route = newHash.startsWith('#') ? newHash.replace('#', '') : newHash;
  // the startsWith method returns a boolean value
  // the startsWith method is called on the newHash object
  // if newHash starts with '#' === true, then replace the '#' with an empty string / remove the hash and assign it to the variable route

  console.log('route:', route);

  if (route === '') return;

  for (var tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex].hash === newHash) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }

  for (var viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].getAttribute('data-view') !== route) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
}
