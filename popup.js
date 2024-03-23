document.addEventListener('DOMContentLoaded', function() {
    const getDataBtn = document.getElementById('getDataBtn');
    const dataContainer = document.getElementById('dataContainer');
  
    getDataBtn.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {message: 'fetch_data'}, function(response) {
          if (response && response.data) {
            dataContainer.textContent = response.data;
          }
        });
      });
    });
  });
  