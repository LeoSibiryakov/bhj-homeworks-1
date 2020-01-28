const input = document.getElementById('task__input');
const add = document.getElementById('tasks__add'); 

add.addEventListener('click', (event) =>  {
    event.preventDefault();
    const text = input.value;
    const list = document.getElementById('tasks__list');
    let input2 = document.createElement('div');
    input2.classList.add ('task');
    input2.innerHTML +=`
        <div class="task">
            <div class="task__title">` + text + `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`
    list.appendChild(input2);
    
    const remove = input2.getElementsByClassName('task__remove');
    const taskRemove = Array.from(remove);
    for (let i = 0; i < taskRemove.length; i++) {
        taskRemove[i].addEventListener('click', () => {
            let del = taskRemove[i].closest('.task');
            console.log(del);
            del.remove();
        })
    } 
    input.value = '';
})