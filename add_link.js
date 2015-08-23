chrome.runtime.onConnectExternal.addListener(function(port){
  port.onMessage.addListener(function(formObject){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
      var activeUrl = tabs[0].url;
      formObject.link = activeUrl;
      port.postMessage(formObject);
    });
  });
});
