//const todos = DataService.getData();
//const todos = StorageService.loadTodos();

// let manager;
// if (todos){
//   manager = new Manager(todos);
// } else {
//   manager = new Manager();
// }


let manager;

DBService.getAllTodos().then(todos =>{
  manager = new Manager(todos);
  render();
})

function render() {
  const todosContainer = document.getElementById("todo-container");
  todosContainer.innerHTML = "";

  for (let i = 0; i < manager.todosArray.length; i++) {
    const todo = manager.todosArray[i];
    const div = document.createElement("div");
    div.classList.add("todo-card");
    if (todo.isCompleted) {
      // div.classList.add('todo-completed');
      div.style.borderColor = "lime"; //con questo si può mettere la classe inline
    }
    const titleStrong = document.createElement("strong");
    const titleNode = document.createTextNode(todo.title);

    titleStrong.appendChild(titleNode);
    div.appendChild(titleStrong);

    const dateSpan = document.createElement("span");
    const dateNode = document.createTextNode(todo.creationDate.toISOString());

    dateSpan.appendChild(dateNode);
    div.appendChild(dateNode);

    const completeBtn = document.createElement("button"); //questo mette un bottone da premere per completare
    const completeNode = document.createTextNode("Completato"); //questo mette il testo al bottone

    const deleteBtn = document.createElement("button");
    const deleteNode = document.createTextNode("Cancella");

    deleteBtn.addEventListener("click", () => {
      
      DBService.deleteToDo(todo.id).then(() => {
        manager.deleteTodo(i);
      // StorageService.saveData(manager.todosArray);
      render();
      })
      
    });

    completeBtn.addEventListener("click", () => {
      manager.changeCompleteStatus(i);
      //todo.isCompleted = true; //questo si legge così: sul click, invoca una funzione vuota che fa diventare true "isCompleted"
      StorageService.saveData(manager.todosArray);
      render();
    });
    completeBtn.appendChild(completeNode);
    div.appendChild(completeBtn);

    deleteBtn.appendChild(deleteNode);
    div.appendChild(deleteBtn);

    todosContainer.appendChild(div);
  }


  

}


function addTodo(){
    let inputValue = document.getElementById('title-input').value;
    console.log(inputValue);
    if (inputValue.trim() !== '') {                         //il trim fa sì che mettere un task di soli spazi funzioni
      manager.addTodoWithTitle(inputValue);
      // StorageService.saveData(manager.todosArray);
      document.getElementById('title-input').value = '';
    }
    render();

    
}
//questo metodo alternativo sotto scrive l'HTML come stringhe all'interno del ciclo, ma document le andrà a inserire nell'HTML scrivendo di fatto HTML con tutti i tag funzionanti

// function render2(){

//     const todosContainer = document.getElementById('todo-container');
//     todosContainer.innerHTML = '';

//     for (const todo of manager.todosArray) {

//         let additionalClass = '';

//         if (todo.isCompleted){
//             additionalClass = 'todo-completed';
//         }

//         const template = `<div class="todo-card ${additionalClass}">
//                             <strong>${todo.title}</strong>
//                             <span>${todo.creationDate.toISOString()}</span>
//                           </div>`;

//         todosContainer.innerHTML += template;

//     }

// }



function orderByTitle() {
  console.log("Order by name");
  manager.orderTodosByTitle();
  render();
}

function orderByDate() {
  console.log("Order by date");
  manager.orderTodosByDate();
  render();
}
