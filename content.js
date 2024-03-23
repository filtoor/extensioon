chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === 'fetch_data') {
      // Example: Fetch data from the current web page
      const data = document.body.innerText;
      sendResponse({ data });
    }
  });
  