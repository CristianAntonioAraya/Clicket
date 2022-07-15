import { useContext, useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'
import { SocketContext } from '../context/SocketContext';

import HistorialCard from '../components/icons/HistorialCard'
import TableTitle from '../components/TableTitle'
import HomeSvg from '../components/icons/HomeSvg';

const HistorialPage = () => {

  const navigate = useNavigate('/')

  const { socket } =useContext( SocketContext )

  const [tickets, setTickets] = useState([])

  useEffect(() => {
    socket.on('new-ticket-assigned', ( ticketAssigned ) => {

      setTickets( ticketAssigned )
    })
    return () => {{
      socket.off('new-ticket-assigned')
    }}

  }, [ socket ])
  

  return (
    <div className='page__container'>
      <div className='historial__container'>
        <div className='historial__content'>
            <TableTitle text='Attending Now'/>
            <div className='historial__list'>
              {
                tickets.slice(0,5).map( ticket => (
                  <HistorialCard key={ ticket.number } name={ ticket.name } number={ ticket.number} desk={ ticket.desk } active={'Active'}/>
                ))
              }

            </div>
        </div>
        <div className='historial__content'>
            <TableTitle text='Historial'/>
            <div className='historial__list'>
              {
                 tickets.slice(5).map( ticket => (
                  <HistorialCard key={ ticket.number } name={ ticket.name } number={ ticket.number} desk={ ticket.desk } active={'Offline'}/>
                ))
              }
            </div>
        </div>
      </div>
      <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default HistorialPage