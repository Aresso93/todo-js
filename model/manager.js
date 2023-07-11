class Manager {
  constructor(todosArray = []) {
    this.todosArray = todosArray;
  }

  addToDo(todo){

    this.todosArray.push(todo);
    Storage.saveData(todo);
  }

  orderTodosByTitle(){
    this.todosArray.sort((todo1, todo2) => todo1.compareByTitle(todo2));
  }

  orderTodosByDate(){
    this.todosArray.sort((todo1, todo2) => todo1.compareByDate(todo2));
  }

  deleteTodo(index){

  this.todosArray.splice(index, 1);
  Storage.saveData(this.todo);
  }

  addTodoWithTitle(title){

    const newTodo = new ToDo(title);

    this.addToDo(newTodo);

    

    console.log('Task aggiunto!');

    render();

    Storage.saveData(todo);

  }

  static fromDbObject(data){

    const tempArray = [];

    for (const genericObject of data) {
        
        if(genericObject){

            const todo = new ToDo(genericObject.title, genericObject.isCompleted, genericObject.creationDate);
            tempArray.push(todo);
        } 
    }

    const newCellar = new Cellar(tempArray);

    return newCellar;
}


}

//tasto "cancella" che chiama la funzione "deleteTodo"
//una <input> di tipo text e un tasto che dice "aggiungi" a fianco all'input. La funzione associata a questo bottone controlla cosa dice l'input, e se dice qualcosa creerà un toDo che ha come title il testo di quell'<input>
   

// let input = 
// // if (input !== ''){
// return input;
// }
// return 