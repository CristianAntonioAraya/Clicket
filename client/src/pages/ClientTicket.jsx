import { useContext, useState } from "react"
import TapSvg from "../components/icons/TapSvg"
import { SocketContext } from "../context/SocketContext";

const ClientTicket = () => {

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null)

  const handleOnClick = () => {
    socket.emit('request-ticket', null, ( ticket ) => {
      setTicket( ticket )
    });
  }


  return (
    <div className='page__container'>
      <div className='client__content'>
        <h3>Click to get a new ticket</h3>
        {
          ticket &&  <span className="client__attend">Your turn: { ticket.number }</span>
        }
        <div className="client__btn" onClick={ handleOnClick }>
            <span>Ticket</span>
            <TapSvg className="svg__tap"/>
        </div>
      </div>
    </div>
  )
}

export default ClientTicket