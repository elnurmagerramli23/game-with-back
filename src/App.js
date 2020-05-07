const express = require('express');
const path = require('path');

class App{
    constructor(controller) {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/', express.static(path.resolve(__dirname, '../public')));
        this.controller = controller;
        this.app.get('/getIteams',this.onGet)
        this.app.put('/setIteams', this.onPut);
    }
    
    onGet = (request,response) =>  {
        const data = this.controller.getIteams()
        response.json(data)
        response.end();
    }
    
    onPut = (request, response) => {
        const {body} = request;
        this.controler.setIteamsJSON.parse(body);
        response.end();
    }
}

module.exports = App;