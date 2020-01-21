let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let link = document.querySelector('.dropdown__link');
let item = document.querySelectorAll('.dropdown__item');

const dropdown = () => {
    list.className = 'dropdown__list dropdown__list_active'
};
value.addEventListener('click', dropdown);

const changeMenu = event => {
    event.preventDefault();
    if (list.classList.contains('dropdown__list_active')) {
        value.textContent = event.target.textContent;
        list.classList.remove('dropdown__list_active');
    };
};

for (let i = 0; i < item.length; i++) {
	item[i].addEventListener('click', changeMenu);
};