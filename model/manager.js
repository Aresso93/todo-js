class Manager {
  constructor(todosArray = []) {
    // if (!todosArray) {
    //   const todosArray = StorageService.loadTodos();
    //   if (todosArray) {
    //     this.todosArray = todosArray;
    //   } else {
    //     this.todosArray = [];
    //   }
    // } else {
    //   this.todosArray = todosArray;
    // }
    this.todosArray = todosArray;
  }

  addTodo(todo){

    this.todosArray.push(todo);

  }

  orderTodosByTitle(){
    this.todosArray.sort((todo1, todo2) => todo1.compareByTitle(todo2));
  }

  orderTodosByDate(){
    this.todosArray.sort((todo1, todo2) => todo1.compareByDate(todo2));
  }

  deleteTodo(index){
   
    this.todosArray.splice(index, 1);
  //StorageService.saveData(manager.todosArray);
  }

  addTodoWithTitle(title){

    const newTodo = new ToDo(title);

    this.addToDo(newTodo);

    

    console.log('Task aggiunto!');

    render();
    StorageService.saveData(manager.todosArray);
    //Storage.saveData(todo);

  }

  

changeCompleteStatus(index){

  const todo = this.todosArray[index];
  todo.isCompleted = !todo.isCompleted;
  StorageService.saveData(this.todosArray);

}

}

//tasto "cancella" che chiama la funzione "deleteTodo"
//una <input> di tipo text e un tasto che dice "aggiungi" a fianco all'input. La funzione associata a questo bottone controlla cosa dice l'input, e se dice qualcosa creerà un toDo che ha come title il testo di quell'<input>
   

// let input = 
// // if (input !== ''){
// return input;
// }
// return 