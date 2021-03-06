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

	var telegramWindowX = screen.width - screen.availWidth + 25;
	var telegramWindowY = screen.height - screen.availHeight + 25;

	var telegramWindowWidth = 1050;
	var telegramWindowHeight = screen.height - telegramWindowY - 25;

	chrome.windows.create({
		'url' : 'https://web.telegram.org/#/im',
		'type' : 'popup',
		'focused' : true,
		'left' : telegramWindowX,
		'top' : telegramWindowY,
		'width' : telegramWindowWidth,
		'height' : telegramWindowHeight
	}, function(window) {
		idTelegramWindow = window.id;
	});
}
