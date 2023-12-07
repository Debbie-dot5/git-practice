const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
    {
      name: 'wash dishes',
      dueDate: '2022-12-22'
    }];

renderTodo();

function renderTodo(){
        
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
   // const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;


    const html = 
    ` 
    <div>${name } </div> 
    <div> ${dueDate } </div>
     <button onclick ="todoList.splice(${i}, 1)
     renderTodo();
     " class="delete-btn">Delete</button>
     `;

    todoListHTML += html
    }
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo() {
    const inputElem = document.querySelector('.js-name-input');
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due-date-input');
   
     const dueDate = dateInputElem.value

    todoList.push({name, dueDate});

    inputElem.value = '';

    renderTodo();
}