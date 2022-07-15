const express = require('express')
const http = require('http')
const socketio = require('socket.io');
const Sockets = require('./socket');


class Server {

    constructor() {

        this.app = express();
        this.port= process.env.PORT;

        this.server = http.createServer( this.app )

        this.io = socketio( this.server )

        const socketEvents = new Sockets( this.io );

    }
    middlewares ( ) {
        

        this.app.get('/lastTickets', ( req, res )=> {
            res.json({
                ok: true,
                ultimos: socketEvents.TicketList.lastTwenties
            })
        })

    }


    execute() {

        this.middlewares();

        this.server.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`)
        });


    }


}

module.exports = Server;