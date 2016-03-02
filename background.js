chrome.browserAction.onClicked.addListener(function(tab){
	console.log("Feel the Bern")
	chrome.tabs.executeScript(null, {
		file: "Feel-the-Bern.js"
		
	});
});