const Model = require('./Model');
const Server = require('./Server');
const Controller = require('./Controller');

function init() {
    const model = new Model(); 
    const controller = new Controller(model);
    const server = new Server(3000);

    controller.init();
    server.start();
}

init();