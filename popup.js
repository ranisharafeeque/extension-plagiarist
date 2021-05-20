document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  console.log(button);
  document.querySelector('button').addEventListener('click', onClick, false);

  function onClick() {
    chrome.tabs.query({ currentWindow: true, active: true},
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'Sending message');
      }
    );
  }
}, false);
