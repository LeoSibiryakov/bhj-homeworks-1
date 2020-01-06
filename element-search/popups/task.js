let show = document.querySelector('.show-success');
let main = document.querySelector('#modal_main');
let success = document.querySelector('#modal_success');
let close = document.querySelectorAll('.modal__close');

main.classList.add('modal_active');

for (let i = 0; close.length > i; i++) {
    close[i].addEventListener('click', function() {
        main.classList.remove('modal_active');
        success.classList.remove('modal_active');
    })
}

show.addEventListener('click', function() {
    success.classList.add('modal_active');
})