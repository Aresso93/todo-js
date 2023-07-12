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