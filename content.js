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
        }, 4000); 

        setTimeout(function() {
            document.getElementById('QID15-5-label').click();
            NextButton();
        }, 8000); 
        
        setTimeout(function() {
            document.getElementById("QR~QID80").value = "more friendly";
            NextButton();
        }, 12000); 
        
        setTimeout(function() {
            document.getElementById('QID18-5-label').click();
            NextButton();
        }, 16000); 

        setTimeout(function() {
            document.getElementById('QID19-5-label').click();
            NextButton();
            
        }, 20000); 

        setTimeout(function() {
            document.getElementById('QID20-5-label').click();
            NextButton();
        }, 24000); 

        setTimeout(() => {
            document.querySelector('input[id="QR~QID23~4~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~6~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~7~1"]').checked = true;
            document.querySelector('input[id="QR~QID23~8~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~10~2"]').checked = true;
            document.querySelector('input[id="QR~QID23~11~2"]').checked = true;
            NextButton();
        }, 28000)

        setTimeout(() =>{
            NextButton();
        }, 30000)

        setTimeout(() =>{
            document.querySelector('input[id="QR~QID44~1~2"]').checked = true;
            document.querySelector('input[id="QR~QID44~3~2"]').checked = true;
            NextButton();
        }, 34000)

        setTimeout(() =>{
            document.getElementById('QID37-2-label').click();
            NextButton();
        }, 38000)
        
        setTimeout(() =>{
            document.getElementById('QID48-4-label').click();
            NextButton();
        }, 42000)

        setTimeout(() =>{
            document.getElementById('QID54-52-label').click();
            NextButton();
        }, 44000)

        setTimeout(() =>{
            document.getElementById('QID57-2-label').click();
            NextButton();
        }, 48000)

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
        }, 52000)

        setTimeout(() => {
            document.getElementById('QID74-5-label').click();
            NextButton();
        }, 56000)

        setTimeout(() => {
            document.getElementById("QR~QID79").value = "all good";
            NextButton();
        }, 60000)
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