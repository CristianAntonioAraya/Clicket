const express = require('express')
const http = require('http')
const socketio = require('socket.io')


class Server {

    constructor() {

        this.app = express();
        this.port= process.env.PORT;

        this.server = http.createServer( this.app )

        this.io = socketio( this.server )

    }

    socketConfig() {

    }

    execute() {

        this.socketConfig()

        this.server.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`)
        })


    }


}

module.exports = Server;