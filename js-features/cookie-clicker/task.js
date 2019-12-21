const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

function addCounter() {
    counter.textContent++;
    if(counter.textContent % 2 == 0) {
        image.width = 200;
    } else {
        image.width = 300;
    }
}

image.onclick = addCounter;