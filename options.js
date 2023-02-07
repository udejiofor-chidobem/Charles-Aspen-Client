document.getElementById("set").onclick = function(){
  chrome.storage.sync.set({serviceName: document.getElementById("ServiceName").value}, function() {
    console.log('Value is set to ' + document.getElementById("ServiceName").value);
  });
  chrome.storage.sync.set({characteristicName: document.getElementById("CharacteristicName").value}, function() {
    console.log('Value is set to ' + document.getElementById("CharacteristicName").value);
  });
  chrome.storage.sync.set({unitName: document.getElementById("DongleName").value}, function() {
    console.log('Value is set to ' + document.getElementById("DongleName").value);
  });
}
