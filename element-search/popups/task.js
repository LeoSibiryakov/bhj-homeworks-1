"use strict"

let main = document.getElementById('modal_main');
let success = document.getElementById('modal_success');
let close = document.getElementsByClassName('modal_close');
let show = document.getElementsByClassName('show-success');

main.classList.add('modal_active');

for (let i = 0;i < close.length; i++) {
    close[i].onclick = function() {
        this.parentElement.parentElement.classList.remove('modal_active');
    }
}
for (let i = 0; i < show.length; i++){ 
  show[i].onclick = function (){
    success.classList.add('modal_active');
    main.remove('modal_active');
    }
}