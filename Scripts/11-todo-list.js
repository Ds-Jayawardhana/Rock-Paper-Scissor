const todoList=[''];



function RenderTodoList(){
    let todoListHTML='';


for(let i=0;i<todoList.length;i++){
    const todoLists=todoList[i];
    const html=`<p>${todoLists}</p>`;
    todoListHTML+=html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML


}


function addTodo(){
    const inputelement=document.querySelector('.js-name-input');
    const name=inputelement.value;
    

    todoList.push(name);
    console.log(todoList);

    inputelement.value='';
}