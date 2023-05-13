// Loop music after 4seconds
// const audio = document.getElementById('audioControl');
// let delay = 4000; // 4 seconds

// audio.addEventListener('ended', function() {
//   setTimeout(function() {
//     audio.currentTime = 0;
//     audio.play();
//   }, delay);
// }, false);

// audio.play();

// Force auto play after 3seconds delay
var audio = document.getElementById("audioControl");
setTimeout(function() {
  audio.play();
}, 1500);