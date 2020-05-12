const express = require('express');
const path = require('path');

class App{
    constructor(controller) {
        this.app = express();
        this.app.use(express.json());
        this.app.use('/', express.static(path.resolve(__dirname, '../public')));
        this.controller = controller;
        this.app.get('/getItems',this.onGet);
        this.app.put('/setItems', this.onPut);
    }
    
    getApp = () => this.app;

    // GET '/getItems' просьба от front-end
    // это запрос который ждет массив от сервера
    onGet = (request,response) =>  {
        const data = this.controller.getItems()
        response.json(data);
        response.end();
    }
    
    // PUT '/setItems' просьба от front-end
    // запрос на то чтобы поставить массив на сервер при каждом шаге игры
    onPut = (request, response) => {
        const {body} = request;
        this.controller.setItems(JSON.parse(body));
        response.end();
    }
}

module.exports = App;