const counting = function() {
    const indication = document.getElementById("timer");
    indication.textContent -= 1;
        if (indication.textContent <=0) {
            clearInterval(interval);
            alert('Вы победили в конкурсе!');
        }
    }

let interval = setInterval(counting,1000);