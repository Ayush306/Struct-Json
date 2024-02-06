// popup.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
  
    // Load the current state from storage and update the toggle switch
    chrome.storage.sync.get('enabled', function (data) {
      toggleSwitch.checked = data.enabled || false;
    });
  
    // Handle toggle switch changes
    toggleSwitch.addEventListener('change', function () {
      const enabled = toggleSwitch.checked;
  
      // Save the state to storage
      chrome.storage.sync.set({ enabled });
  
      // Send a message to the background script to update functionality
      chrome.runtime.sendMessage({ action: 'toggleExtension', enabled });
    });
  });
  