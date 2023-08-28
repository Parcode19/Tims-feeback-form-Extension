async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
  
    return tabs[0];
}
  
let extensionOn = false;
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const statu = document.getElementById('status');

    const toggleExtension = async () => {
        const activeTab = await getActiveTabURL();

        extensionOn = !extensionOn;
        statu.textContent = extensionOn ? "ON" : "OFF";

        chrome.tabs.sendMessage(activeTab.id, {
            type: "extensionValue",
            value: extensionOn,
        });
    }

    toggleButton.addEventListener('click', toggleExtension);
});

