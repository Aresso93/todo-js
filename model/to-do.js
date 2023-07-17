class ToDo {
  constructor(title, isCompleted = false, creationDate = new Date(), id) {            //default: non completato e con la data corrente

    this.title = title;
    this.isCompleted = isCompleted;
    this.creationDate = creationDate;
    this.id = id;
  }


  compareByTitle(todo){

    return this.title.localeCompare(todo.title);

  }

  compareByDate(todo){

    return todo.creationDate.getTime() - this.creationDate.getTime();

  }

}
