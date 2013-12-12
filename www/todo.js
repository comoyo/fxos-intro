var inputBox = document.querySelector('#newTodo');
var listContainer = document.querySelector('#todoList');
var installButton = document.querySelector('#install');
var manifestUrl = location.origin + '/manifest.webapp';

function remove(element) {
  element.parentElement.removeChild(element);
}

if (navigator.mozApps) {
  var checkRequest = navigator.mozApps.checkInstalled(manifestUrl);
  checkRequest.onsuccess = function() {
    if (checkRequest.result)
      remove(installButton);
  };
} else {
  remove(installButton);
}

inputBox.addEventListener('keypress', function addTodo(event) {
  if (event.keyCode === 13) {
    var listElement = document.createElement('li');
    listElement.textContent = inputBox.value;
    listContainer.appendChild(listElement);
    inputBox.value = '';
  }
}, false);

listContainer.addEventListener('click', function markTodo(event) {
  var listElement = event.target;
  remove(listElement);
}, false);

installButton.addEventListener('click', function() {
  var installRequest = navigator.mozApps.install(manifestUrl);
}, false);
