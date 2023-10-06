let extensionOn = false;
var surveyCode = null;

function main() {
    if (extensionOn) {        
        var input = document.getElementById("QR~QID9");
        input.value = surveyCode;

        NextButton();

        setTimeout(function() {
            document.getElementById('QID14-1-label').click();
            NextButton();
        }, 3500); 

        setTimeout(function() {
            document.getElementById('QID15-5-label').click();
            NextButton();
        }, 5400); 
        
        setTimeout(function() {
            document.getElementById("QR~QID80").value = "more friendly";
            NextButton();
        }, 6400); 
        
        setTimeout(function() {
            document.getElementById('QID18-5-label').click();
            NextButton();
        }, 7100); 

        setTimeout(function() {
            document.getElementById('QID19-5-label').click();
            NextButton();
            
        }, 8800); 

        setTimeout(function() {
            document.getElementById('QID20-5-label').click();
            NextButton();
        }, 9800); 

        setTimeout(() => {
            document.querySelector('input[id="QR~QID23~4~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~6~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~7~1"]').checked = true;
            document.querySelector('input[id="QR~QID23~8~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~10~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~11~2"]').checked = true;
            NextButton();
        }, 10500)

        setTimeout(() =>{
            NextButton();
        }, 11300)

        setTimeout(() =>{
            document.querySelector('input[id="QR~QID44~1~2"]').checked = true;
            document.querySelector('input[id="QR~QID44~3~2"]').checked = true;
            NextButton();
        }, 12200)

        setTimeout(() =>{
            document.getElementById('QID37-2-label').click();
            NextButton();
        }, 13200)
        
        setTimeout(() =>{
            document.getElementById('QID48-4-label').click();
            NextButton();
        }, 14900)

        setTimeout(() =>{
            document.getElementById('QID54-52-label').click();
            NextButton();
        }, 15700)

        setTimeout(() =>{
            document.getElementById('QID57-2-label').click();
            NextButton();
        }, 16400)

        setTimeout(() => {
            document.querySelector('input[id="QR~QID59~8~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~9~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~10~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~1~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~2~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~3~2"]').checked = true;
            document.querySelector('input[id="QR~QID59~6~1"]').checked = true;
            document.querySelector('input[id="QR~QID59~7~2"]').checked = true;
            NextButton();
        }, 17200)

        setTimeout(() => {
            document.getElementById('QID74-5-label').click();
            NextButton();
        }, 18000)

        setTimeout(() => {
            document.getElementById("QR~QID79").value = "all good";
            NextButton();
        }, 19000)
    }
}

function NextButton() {
    var nextButton = document.getElementById("NextButton");
    nextButton.click();
}

// Listen for messages from the popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "extensionValue") {
        extensionOn = message.value === "OFF";
        surveyCode = message.surveyCode;
        main();
    }
});

// Call the main function when the DOM is loaded
document.addEventListener('DOMContentLoaded', main);