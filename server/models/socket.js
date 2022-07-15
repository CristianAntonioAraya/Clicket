const TicketList = require('./ticketList')

class Sockets {

    constructor( io ) {
        this.io = io;

        this.ticketList = new TicketList();

        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', ( socket ) => {
            console.log('Client connected')

            socket.on('request-ticket', ( data, callback) => {
                const newTicket = this.ticketList.createTicket();
                callback( newTicket );
            })

            socket.on('attend-next-ticket', ({ name, desk }, callback) => {
                const attendingTicket = this.ticketList.assignTicket( name, desk )

                callback( attendingTicket )

                this.io.emit('new-ticket-assigned', this.ticketList.lastTwenties );

            })
        })
    }
}


module.exports = Sockets;