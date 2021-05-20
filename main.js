chrome.runtime.onMessage.addListener(function (request) {
  document.querySelector('body').style.background = '#ffff99';
//   const duckSong = document.querySelector('.music');
  // new Audio('Fluffing-a-Duck.mp3').play();

  const duckSong = new Audio('https://upload.wikimedia.org/wikipedia/commons/c/c3/Kevin_MacLeod_-_Fluffing_a_Duck.ogg');
  document.querySelector('body').appendChild(duckSong);
  document.querySelector('audio').play();
  
  setTimeout(() => {
    document.querySelector('audio').src = '';
  }, 15000);

  // duckSong.play();

  // setTimeout(duckSong.stop, 1500);
  // const duckSong = document.querySelector('.music');
  // console.log(duckSong);

  function duckSongPlay() {
    duckSong.play();
  }
//   setTimeout(duckSongPlay, 1500);
  // duckSongPlay();

  function getSelectionText() {
    let text = '';

    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
      text = document.selection.createRange().text;
    }

    // setTimeout(duckSongPlay, 1500);
    return text;
  }

  const selectedText = getSelectionText();
  const wikipedia = `https://en.wikipedia.org/w/index.php?search=${ selectedText }`
  alert(`You are being redirected to: ${ wikipedia }`);

  // window.location.href = wikipedia;
  window.open(wikipedia);
})
