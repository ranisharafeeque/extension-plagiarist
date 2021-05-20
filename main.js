chrome.runtime.onMessage.addListener(function (request) {
  document.querySelector('body').style.background = '#ffff99';

  function getSelectionText() {
    let text = '';
    
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }
    
    return text;
  }
  
  const selectedText = getSelectionText();
  
  if (!selectedText) {
    alert('You forgot to select some text! Please try again');
  } else {
    const duckSong = new Audio('https://upload.wikimedia.org/wikipedia/commons/c/c3/Kevin_MacLeod_-_Fluffing_a_Duck.ogg');
    document.querySelector('body').appendChild(duckSong);
    document.querySelector('audio').play();
    
    setTimeout(() => {
      document.querySelector('audio').src = '';
    }, 15000);
    
    let formattedText = selectedText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
      .trim()
      .split(' ')
      .join('+');

    const wikipedia = `https://en.wikipedia.org/w/index.php?search=${ formattedText }`;
    alert(`You are being redirected to: ${ wikipedia }`);
  
    window.open(wikipedia);
  }
});
