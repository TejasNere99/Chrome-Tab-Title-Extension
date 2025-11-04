document.getElementById("getTitleBtn").addEventListener("click", async () => {
    // Get the active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    
    // Display the tab title
    document.getElementById("titleDisplay").textContent = tab.title;
});
