'use strict';

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(i) {
  return document.getElementById(`hole${i}`);
}

function click() {
  if (this.className.includes( 'hole_has-mole' )) {
    dead.textContent = +dead.textContent + 1;
    if (dead.textContent === '10') {
      alert('Win!');
      dead.textContent = '0';
      lost.textContent = '0';
    }
  } else {
    lost.textContent = +lost.textContent + 1;
    if (lost.textContent === '5') {
      alert('Lose!');
      dead.textContent = '0';
      lost.textContent = '0';
    }
  }
}

for (let i = 1; i <= 9; i += 1) {
  const hole = getHole(i);
  hole.onclick = click;
}