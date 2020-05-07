class Controller{
    constructor(model) {
        this.model = model;
    }
    
    init = () => {
        this.getItems();
        this.setItems();
    }

    getItems = (data) => {
        this.model.getStorage(data);
    }

    setItems = (data) => {
        this.model.setStorage(data);
    }
}

module.exports = Controller;