const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const lists = document.querySelector('#tasks');



form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const task = input.value;
    if(!task){
        alert("Please add a task")
        return
    }

    const task_el = document.createElement('div')
    task_el.classList.add('task')

    const task_content_el = document.createElement('div')
    task_content_el.classList.add('content')
    task_el.appendChild(task_content_el)

    const task_input_el = document.createElement('input')
    task_input_el.classList.add('text')
    task_input_el.type = "text"
    task_input_el.value = task
    task_input_el.setAttribute("readonly", "readonly")

    task_content_el.appendChild(task_input_el)


    //adding actions

    const task_actions_el = document.createElement('div')
    task_actions_el.classList.add('actions')

    const task_edit = document.createElement('button')
    task_edit.classList.add('edit')
    task_edit.innerHTML = 'Edit'
    // delete
    const task_delete = document.createElement('button')
    task_delete.classList.add('delete')
    task_delete.innerHTML = 'Delete'

    task_el.appendChild(task_actions_el)
    task_actions_el.appendChild(task_edit)
    task_actions_el.appendChild(task_delete)

    lists.appendChild(task_el)

    task_edit.addEventListener('click', () =>{
        if(task_edit.innerText.toLowerCase() == 'edit'){
            task_input_el.removeAttribute('readonly')
            task_input_el.focus()
            task_edit.innerText = "Save"
        }else{
            task_input_el.setAttribute('readonly' ,'readonly')
            task_edit.innerHTML = 'Edit'
    
        }
    })

    task_delete.addEventListener('click', () => {
        tasks.removeChild(task_el);
    })










    input.value = ''
    // console.log(task_content_el)
    // console.log(task_el)
    console.log(task)


})









