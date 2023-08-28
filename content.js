document.addEventListener('DOMContentLoaded', function() {
    let extensionOn = true;

    // Receiving the message in content.js
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.type === "extensionValue") {
            console.log(`Extension is: ${message.value}`);
            extensionOn = message.value;
            if (extensionOn) {
                main();
            } 
        }
    });

    function main() {
        document.getElementById('NextButton').click();
    }
});

//430985002115223030632