chrome.app.runtime.onLaunched.addListener(function() {

	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;

	var indexWindowWidth = Math.round(screenWidth * (4 / 5));
	var indexWindowHeight = Math.round(screenHeight * (4 / 5));

	var indexWindowX = Math.round((screenWidth - indexWindowWidth) / 2);
	var indexWindowY = Math.round((screenHeight - indexWindowHeight) / 2);

	chrome.app.window.create('index.html', {
		id : "indexWindowID",
		outerBounds : {
			left : indexWindowX,
			top : indexWindowY,
			width : indexWindowWidth,
			height : indexWindowHeight
		}
	});
});