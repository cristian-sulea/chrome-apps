var idTelegramWindow;

chrome.browserAction.onClicked.addListener(function() {

	if (idTelegramWindow) {
		chrome.windows.update(idTelegramWindow, {
			focused : true
		}, function(window) {
			if (chrome.runtime.lastError) {
				openTelegramWindow();
			}
		});
	}

	else {
		openTelegramWindow();
	}

});

function openTelegramWindow() {
	chrome.windows.create({
		'url' : 'https://web.telegram.org/#/im',
		'type' : 'popup',
		'focused' : true,
		'width' : 1050
	}, function(window) {
		idTelegramWindow = window.id;
	});
}
