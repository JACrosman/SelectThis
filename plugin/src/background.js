
/** Create a popup window and inject authoring inside of it */
// chrome.browserAction.onClicked.addListener(function () {
//     chrome.windows.create({
//         url: chrome.extension.getURL('popup.html'),
//         width: 700,
//         height: 900,
//         type: 'popup'
//     }, function(window) {
//         activeWindows.push(window.id);
//     });
// });

// /** Keep track of any tab the user visisted so we can shutdown waypoints on it */
chrome.runtime.onMessage.addListener(function(message, sender) {
   
});