
console.log('registering');
chrome.runtime.onMessageExternal.addListener(function(message, sender, fn){
  console.log("external message");
  console.log("message received", message);
  fn({ hi: "butt" } );
});

chrome.runtime.onMessage.addListener(function(message, sender, fn){
  console.log("regular message");
  console.log("message received", message);
  fn({ hi: "butt" } );
});
// chrome.runtime.onConnectExternal.addListener(function(port){
  // console.log("external connection set")
  // port.onMessage.addListener(function(formObject){
    // console.log("listnere fired")
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
      // var activeUrl = tabs[0].url;
      // formObject.link = activeUrl;
    // console.log("posting message back", formObject)
      // port.postMessage(formObject);
    // });
  // });
// });
