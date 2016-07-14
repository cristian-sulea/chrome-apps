chrome.app.runtime.onLaunched.addListener(function() {

	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = Math.round(screenWidth * (1 / 2));
	var height = Math.round(screenHeight * (3 / 4));

	width = 922;
	height = 732;

	chrome.app.window.create('index.html', {
		id : "indexWindowID",
		outerBounds : {
			width : width,
			height : height,
			left : Math.round((screenWidth - width) / 2),
			top : Math.round((screenHeight - height) / 2)
		}
	});
});