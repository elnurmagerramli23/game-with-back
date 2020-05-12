const Server = require('./Server');

function init() {
    const server = new Server(5000);
    server.start();
}

init();