
// function eventKey(event){
//     var eventKey = document.getElementById('box');
//     eventKey.addEventListener("keypress", eventKey);
//     document.getElementById("input").innerHTML += "event.key "+ eventKey + '<br>'
// }
// function eventCode(event){
//     var eventCode = document.getElementById('box');
//     eventCode.addEventListener("keypress", eventCode);
//     document.getElementById("input").innerHTML += 'event.code '+ eventCode + '<br>'
// }
// function eventWhich(event) {
//     var eventWhich = document.getElementById('box');
//     eventWhich.addEventListener("keypress", eventWhich);
//     document.getElementById("input").innerHTML += 'event.which '+ eventWhich + '<br>'
// }

var userInput = document.getElementById('box');
  
userInput.addEventListener("keypress", eventKey);
userInput.addEventListener("keypress", eventCode);
userInput.addEventListener("keypress", eventWhich);

  
function eventKey(event) {
    document.getElementById("userInput").innerHTML += "event.key: " + event.key + " "
}
function eventCode(event) {
    document.getElementById("userInput").innerHTML += "event.code: " + event.code + " "
}
function eventWhich(event) {
    document.getElementById("userInput").innerHTML += "event.which: " + event.which
}
// userInput.clear();