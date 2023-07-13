class StorageService{



    static saveData(data){

        const dataString = JSON.stringify(data);
        localStorage.setItem('Task', dataString);

    }

    static loadTodos(){

        const dataString = localStorage.getItem('Task');
        if (dataString){
            const data = JSON.parse(dataString);

            const tempArray = [];
            for (const object of data) {
               const newTodo = new ToDo(object.title, object.isCompleted, new Date(object.creationDate));
               tempArray.push(newTodo);
     
            }

            return tempArray;
        }
        return null;
    }

}

//esiste anche il modo di salvare le cose ogni tot secondi, usando la funzione setInterval, il suo utilizzo dipende dal tipo di programma che voglio fare