class Controller{
    constructor(model) {
        this.model = model;
    }

    addObjToModel(data) {
        this.model.addElement(data);
    }
}

module.exports = Controller;