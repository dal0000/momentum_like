const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '✖️';
    button.addEventListener('click',(event)=>{
        const parent = event.target.parentElement;
        parent.remove();        
        toDos = toDos.filter(item => {return item.id !== parseInt(parent.id)});
        saveTodo();
    });
    li.appendChild(span);
    li.appendChild(button); 
    toDoList.appendChild(li);
}

toDoForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDoInput.value='';
    paintTodo(newTodoObj);
    toDos.push(newTodoObj);
    saveTodo();
});

const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
if(parsedToDos){
    parsedToDos.forEach(paintTodo);
    toDos = parsedToDos;
}