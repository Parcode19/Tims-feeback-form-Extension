async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}
  
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const currentStatus = document.getElementById('status');

    const toggleExtension = async () => {
        const activeTab = await getActiveTabURL();
        const statusText = currentStatus.innerText;
        const surveyCode = document.getElementById("surveyCode").value;

        if (statusText === "OFF") {
            currentStatus.innerText = "ON";
            currentStatus.style.color = "#3ce74c";
        } else {
            currentStatus.innerText = "OFF";
            currentStatus.style.color = "#e74c3c"; 
        }
        chrome.tabs.sendMessage(activeTab.id, {
            type: "extensionValue",
            value: statusText,
            surveyCode: surveyCode
        });
    }

    toggleButton.addEventListener('click', toggleExtension);

});

