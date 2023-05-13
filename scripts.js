// var audio = document.getElementById("audioControl");

// function playAudio() {
//   audio.play();
// }

// function pauseAudio() {
//   audio.pause();
// }

const audio = document.getElementById('audioControl');
let delay = 4000; // 4 seconds

audio.addEventListener('ended', function() {
  setTimeout(function() {
    audio.currentTime = 0;
    audio.play();
  }, delay);
}, false);

audio.play();