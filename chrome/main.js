var isEnabled = true
chrome.browserAction.onClicked.addListener(function callback){
	if(isEnabled){
	chrome.browserAction.disable(integer tabId)
	}
	else{
		chrome.browserAction.enabled(integer tabId)
	}
	isEnabled = ~isEnabled;
}