const Ticket = require('./ticket')

class TicketList {

    constructor () {

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

    assignTicket( name, desk ){


        if( this.pending.length === 0 ) return null;

        const nextTicket = this.pending.shift();

        nextTicket.name = name;
        nextTicket.desk = desk;
        
        this.asigned.unshift( nextTicket );

        return nextTicket;

    }

}

module.exports = TicketList;