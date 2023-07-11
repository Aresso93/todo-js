class Storage{

    static saveData(data){

        const dataString = JSON.stringify(data);
        localStorage.setItem('Task', dataString);

    }

    static loadData(){

        const dataString = localStorage.getItem('Task')
        if (dataString){
            const data = JSON.parse(dataString)
            return data;
        }
        return null;
    }

}