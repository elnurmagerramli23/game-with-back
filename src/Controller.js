class Controller{
    constructor(model) {
        this.model = model;
    }
    
    getItems = () => this.model.getStorage();
    

    setItems = (data) => {
        this.model.setStorage(data);
    }
}

module.exports = Controller;