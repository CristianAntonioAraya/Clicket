const Ticket = require('./ticket')

class TicketList {

    constructor() {

        this.lastName = 0;

        this.pending = [];
        this.asigned = [];

    }
    get nextNumber () {
        this.lastName ++;
        return this.lastName;

    }
    get lastTwenties() {
        return this.asigned.slice(0,20)
    }
    createTicket() {

        const newTicket = new Ticket(this.nextNumber)
        this.pending.push( newTicket )
        return newTicket;

    }

    assignTicket( executive, desk ){
        if( this.pending === 0 ) return null;

        const nextTicket = this.pending.shift();
        nextTicket.executive = executive;
        nextTicket.desk = desk;

        this.assignTicket.unshift( nextTicket );

        return this.assignTicket;

    }

}

module.export = TicketList;