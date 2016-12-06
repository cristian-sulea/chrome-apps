function webviewOnLoad() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
  webview.src = "https://web.telegram.org/";
};

function webviewOnResize() {
  var webview = document.querySelector("webview");
  webview.style.height = document.documentElement.clientHeight + "px";
  webview.style.width = document.documentElement.clientWidth + "px";
};
	
onload = webviewOnLoad;
window.onresize = webviewOnResize;