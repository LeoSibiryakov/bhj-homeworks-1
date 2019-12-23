// 'use strict'

// const dead = document.getElementById("dead");
// const lost = document.getElementById("lost");
// const getHole = index => document.getElementById(`hole${index}`)

// function check() {
//     if (dead.textContent === 10) {
//         alert('You win!');
//         dead.textContent = 0;
//         lost.textContent = 0;
//     } else if (lost.textContent === 5) {
//         alert("Loser!");
//         dead.textContent = 0;
//         lost.textContent = 0;
//     }
// }

// for (let i = 1; i < 10; i++) {
//     let hole = getHole(i);
//       hole.onclick = function() {
//           if (hole.className.includes('hole_has-mole')) {
//               dead.textContent++;
//               check();
//           } else {
//               lost.textContent++;
//               check();
//           }
//       }
// }

// 'use strict'

// let dead = document.getElementById('dead')
// let lost = document.getElementById('lost')
// let getHole = index => document.getElementById(`hole${index}`)

// function result() {
//     if(dead.textContent == 10) {
//         alert('Победа!')
//         dead.textContent = 0
//         lost.textContent = 0
//     }else if (lost.textContent == 5){
//         alert('Вы проиграли!')
//         dead.textContent = 0
//         lost.textContent = 0
//     }
// }

// for (let i = 1; i < 10; i++) {
//     let hole = getHole(i)
//     hole.onclick = function() {
//         if(hole.className.includes('hole_has-mole')) {
//             dead.textContent++
//             result()
//         }else{
//             lost.textContent++
//             result()
//         }
//     }
// }

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
