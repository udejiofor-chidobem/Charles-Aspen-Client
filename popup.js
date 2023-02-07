chrome.storage.sync.get(['unitName'], function(result) {
        console.log('Value currently is ' + result.unitName);
    document.getElementById("hi1").innerHTML = "Unit Name: " + result.unitName
    })
chrome.storage.sync.get(['serviceName'], function(result) {
        console.log('Value currently is ' + result.serviceName);
    document.getElementById("hi2").innerHTML = "Service ID: " + result.serviceName
    })
chrome.storage.sync.get(["characteristicName"], function(result){
        console.log('Value currently is ' + result.characteristicName);
    document.getElementById("hi3").innerHTML = "Character ID: " + result.characteristicName
    })
