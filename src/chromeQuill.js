/**
 *	ChromeQuill - a windowed LaTeX converter that leverages MathQuill to produce a graphic, LaTeX code, and HTML code
 * 	Used windowing code from Heinrich Thelen (heithe01+chrtsb@gmail.com)
 *  Version 1.0 - 2018-04-15
 *	
 **/

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: "http://www.daveghidiu.com/code/quill/index.html",
    type: "popup",
    width: 350,
    height: 750
  });
});
