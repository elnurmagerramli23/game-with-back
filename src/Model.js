class Model{
    constructor() {
        this.storage = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 0]
        ];
    }
    
    getStorage = () => this.storage;

    setStorage = array => {
        this.storage = array;
    }
}

module.exports = Model;