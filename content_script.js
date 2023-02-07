var myCharacteristic;
var actualCode = 'window.confirm = function(){ console.log("Auto Accept"); return true;};';
var warnCount = 0;
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();

const bread = document.querySelector("#breadcrumbsContainer");
const button = document.createElement('button');
var resx = window.innerWidth
//document.querySelector("#breadcrumbsContainer").button;
//.querySelectorAll("tr")[0].querySelectorAll("td")[124].appendChild(button).innerHTML= "DOGES";
button.innerHTML = 'Bluetooth Connect'
button.style = "background-color: #4A5B95; border: none; color: white; width: 100%; padding: 8px 6px; text-align: center; text-decoration: none; display: inline-block; font-size: 13px; margin: 4px 2px; cursor: pointer; z-index: 20; position: absolute;"
button.onclick = async () => {


  chrome.storage.sync.get(['unitName'], function(result) {
      console.log('Value currently is ' + result.unitName);
      const unitNae = result.unitName

  chrome.storage.sync.get(['serviceName'], function(result) {
      console.log('Value currently is ' + result.serviceName);
      const serviceUuid = result.serviceName

  //"0000ffe0-0000-1000-8000-00805f9b34fb"

  chrome.storage.sync.get(["characteristicName"], function(result){
      console.log('Value currently is ' + result.characteristicName);
      const  characteristicUuid = result.characteristicName

  //'0000ffe1-0000-1000-8000-00805f9b34fb'

  navigator.bluetooth.requestDevice({filters: [{ name: unitNae}],
     optionalServices: [serviceUuid]
  })
  .then(device => {
    //document.getElementByid.button.innerHTML=Connected
    return device.gatt.connect();
  })
  .then(server => {
    return server.getPrimaryService(serviceUuid);
  })
  .then(service => {
    return service.getCharacteristic(characteristicUuid);
  })
  .then(characteristic => {
    myCharacteristic = characteristic;
    return myCharacteristic.startNotifications().then(_ => {
      myCharacteristic.addEventListener('characteristicvaluechanged',
          handleNotifications);
    });
  })
  .then(value => {

 })
  .catch(error => {
    alert("Bluetooth Failed");
    console.log('Argh! ' + error);
  });
  })
  })
  })
}
document.body.appendChild(button);
//document.body.insertBefore(button,document.getElementsByTagName("div")[0]);
//document.querySelector(".optionsBar").querySelectorAll("tr")[0].querySelectorAll("td")[124].appendChild(button);
//document.querySelector("#breadcrumbsContainer").appendChild(button);
//document.querySelectorAll(".navTabBackground.c1Background")[5].insertBefore(button,document.querySelectorAll(".navTabBackground.c1Background")[5].querySelector("img"));

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function handleNotifications(event) {
  let value = event.target.value;
  let a = [];
  let student = value.getUint8(5)
  for (let i = 0; i < value.byteLength; i++) {
    a.push(('00' + value.getUint8(i).toString(16)).slice(-2));
  }
  var studentID = hex2a(a.join(''));
  console.log("> FUNCTION RESULT " + a.join(' '))
  console.log('> ' + a.join('') + " 1");
  console.log('> ' + hex2a(a.join('')) + " 2")
  console.log('> ' + typeof hex2a(a.join('')) + ' 3')
  console.log('> Student ID = ' + studentID)
  console.log('> Student ID Temp = '+ studentID.substring(6))
  console.log('> Student ID # = '+ studentID.substring(0,6))


  var studentNumb = Number(studentID.substring(0,6));
//Loacte ID in Table elementID = dataGrid
  //var row =
  var temp = studentID.substring(6);

  var table = document.querySelector('#dataGrid');
  var rows = table.querySelectorAll("tr");
  var msg = "No such rows exists"
  for (i = 1; i < rows.length; i++) {

    var tableData = rows[i].querySelectorAll("td");
    //console.log("RAN")

    if (tableData[1 - 1].textContent == studentNumb) {
      document.getElementById(tableData[3].getElementsByTagName('input')[2].click());
      msg = i;
      var rowSelected = table.getElementsByTagName('tr')[i];
      var rowes = tableData[1];
      rows[i].cells[1].innerHTML += ("| " + temp + "&#730");
      if (temp <= 95) {
        rowSelected.style.backgroundColor = "#66b366";
        rowes.style.backgroundColor = "#a6d3a6";
      } else if (temp >= 95 && temp <= 97) {
        rowSelected.style.backgroundColor = "#ffe373";
        rowes.style.backgroundColor = "#ffeda6";
      } else if (temp >= 98) {
        rowSelected.style.backgroundColor = "#ff7373";
        rowes.style.backgroundColor = "#ffb2b2";
        console.log('W1');
        warnCount += 1;
      }
      console.log('w2');
      rows[0].cells[1].innerHTML = ("");
      rows[0].cells[1].innerHTML = ("Name & Temp (" + warnCount + " Potential Carrier(s))");
      break;
    }
}
//  console.log("Student Row = " + msg);
  console.log("Warning Count = " + warnCount);

}

//THE DIVIDE

function findRowNumber(cn1, v1) {
  var temp = studentID.substring(2,0);
  var warnCount = 0;
  var table = document.querySelector('#dataGrid');
  var rows = table.querySelectorAll("tr");
  var msg = "No such rows exists"
  for (i = 1; i < rows.length; i++) {
    var tableData = rows[i].querySelectorAll("td");
    //console.log("RAN")
    document.getElementById(tableData[3].getElementsByTagName('input')[2].click());
    if (tableData[cn1 - 1].textContent == v1) {
      msg = i;
      var rowSelected = table.getElementsByTagName('tr')[i];
      var rowes = tableData[cn1];
      rows[i].cells[1].innerHTML += (", " + temp + "&#730");
      if (temp <= 95) {
        rowSelected.style.backgroundColor = "#66b366";
        rowes.style.backgroundColor = "#a6d3a6";
      } else if (temp >= 95 && temp <= 97) {
        rowSelected.style.backgroundColor = "#ffe373";
        rowes.style.backgroundColor = "#ffeda6";
      } else if (temp >= 98) {
        rowSelected.style.backgroundColor = "#ff7373";
        rowes.style.backgroundColor = "#ffb2b2";
        console.log('W1');
        warnCount += 1;
      }
      console.log('w2');
      rows[0].cells[1].innerHTML = ("");
      rows[0].cells[1].innerHTML = ("Name & Temp (" + warnCount + " Potential Carrier(s))");
      break;
    }
  }
  console.log("Student Row = " + findRowNumber(1, studentNumb));
  console.log("Warning Count = " + warnCount);
  return msg;
}
