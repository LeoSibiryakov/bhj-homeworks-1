let menu = document.querySelectorAll('.menu_sub');
for(let i=0;i<menu.length;i++){
    let secondMenu = menu[i].previousSibling.previousSibling;

    secondMenu.addEventListener("click",function() {
        event.preventDefault();
        if(menu[i].classList.contains('menu_active')) {
            menu[i].classList.remove('menu_active');
        } else {
            menu[i].classList.add('menu_active');
        }        
    });    

    secondMenu.addEventListener("blur",function() {
        if(menu[i].classList.contains('menu_active')) {
            menu[i].classList.remove('menu_active');
        }
    });       
}