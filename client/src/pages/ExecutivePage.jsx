import { useContext, useState  } from 'react'
import { useNavigate} from 'react-router-dom'

import CloseSvg from '../components/icons/CloseSvg'
import HomeSvg from '../components/icons/HomeSvg'
import RightArrowSvg from '../components/icons/RightArrowSvg'
import { SocketContext } from '../context/SocketContext'
import { GetUserStorage } from '../utils/getUserStorage'

const ExecutivePage = () => {

  const navigate = useNavigate('')
  const { socket } = useContext( SocketContext )

  const [user] = useState( GetUserStorage() )
  const [ticket, setTicket] = useState(null)

  const handleLogout = () => { 
    localStorage.clear()
    navigate('/')
  }
  const handleContext = () =>{
    socket.emit('attend-next-ticket', user, ( ticket ) => {
      setTicket( ticket )
    })
  }



  return (
    <div className='page__container'>
        <CloseSvg className="svg__close" onClick={ handleLogout }/>
        <h3 className='executive__title'>{user.name}</h3>
        <div className='executive__msg'>
          <div>
            <span className='executive__desk'>You are working at desk number: </span>
            <span className='executive__desk-number' >{user.desk}</span>

          </div>
          {
            ticket !== null 
            ? <div>
                <span className='executive__desk'>You are attending number: </span>
                <span className='executive__number'>{ticket.number}</span>
              </div>
            : <span className='executive__desk'>There are no pending tickets</span>
          }
        </div>
        <div onClick={ handleContext } className='executive__arrow-icon'>
          <span >Next</span>
          <RightArrowSvg className="svg__right-arrow"/>
        </div>
        <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default ExecutivePage