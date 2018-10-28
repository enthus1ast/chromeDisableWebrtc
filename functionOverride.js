var replaceFunc = "function() {console.log('warning this site tried to use WebRTC')};"
var actualCode = ""
actualCode += "window.RTCPeerConnection = " + replaceFunc;
actualCode += "window.MediaStream = " + replaceFunc;
actualCode += "window.RTCDataChannel = " + replaceFunc;

// console.log(actualCode);
// var actualCode = "alert('foo');"
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
// script.remove();