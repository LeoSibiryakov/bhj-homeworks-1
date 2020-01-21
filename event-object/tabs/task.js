const tab = Array.from(document.querySelectorAll('.tab'));
const menu = document.querySelectorAll('.tab__content');

const change = event => {
    for (let i = 0; i < tab.length; i++) {
        tab[i].className = 'tab';
        event.target.className = 'tab tab_active';
    }
    for (let i = 0; i < menu.length; i++) {
        menu[i].className = 'tab__content'
    }
    const index = tab.indexOf(event.target);
    menu[index].className = 'tab__content tab__content_active'
};

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', change)
}; 