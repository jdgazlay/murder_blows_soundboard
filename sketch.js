
var intro;

function preload() {
  soundFormats('mp3');
  intro = loadSound('assets/our_hip_murder_blows_soundboard.mp3');
}

function setup() {
  intro.play();
}
