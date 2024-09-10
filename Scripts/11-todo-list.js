const todoList=[{}];



function RenderTodoList(){
    let todoListHTML='';


for(let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
    //const name=todoObject.name;
    //const dueDate=todoObject.dueDate;
    const { name,dueDate }=todoObject;//Shortcut for the line 17 & 18
    const html=`
        <div class="dtls">${name}</div>
        <div class="dtls">${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            RenderTodoList();
        "class="dlt-btn">Delete</button>

    
    `;
    todoListHTML+=html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML


}


function addTodo(){
    const inputelement=document.querySelector('.js-name-input');
    const name=inputelement.value;

    const dateInputElement=document.querySelector('.js-duedate-input');
    const dueDate=dateInputElement.value;
    

    todoList.push({
        //name:name,
        //dueDate:dueDate,
        name,
        dueDate
    });
    console.log(todoList);

    inputelement.value='';
}