let floortom = new Audio("sounds/floortom.mp3");
let kick = new Audio("sounds/kick.mp3");
let racktom = new Audio("sounds/racktom.mp3");
let rimshot = new Audio("sounds/rimshot.mp3");
let stickshot = new Audio("sounds/stickshot.mp3");

// cette fonction est lancée
// quand on clique sur un instrument (bouton orange)
function playSound(instrument) {
  // si jamais le son est déjà en train d'être joué
  // on remet le son à 0
  if (instrument.currentTime > 0) {
    instrument.currentTime = 0;
  }
  // on joue le son
  instrument.play();
}

// une liste de couleurs, pour la question A.2
let colors = ["#7cabf4", "#7ed06a", "#ff957a", "#efb355", "#ff8e2b", "#b893ed"];

function pickRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}