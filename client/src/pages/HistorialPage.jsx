import HistorialCard from '../components/icons/HistorialCard'
import TableTitle from '../components/TableTitle'
import { useNavigate  } from 'react-router-dom'
import HomeSvg from '../components/icons/HomeSvg';

const HistorialPage = () => {

  const navigate = useNavigate('/')

  return (
    <div className='page__container'>
      <div className='historial__container'>
        <div className='historial__content'>
            <TableTitle text='Attending Now'/>
            <div className='historial__list'>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
            </div>
        </div>
        <div className='historial__content'>
            <TableTitle text='Historial'/>
            <div className='historial__list'>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
              <HistorialCard/>
            </div>
        </div>
      </div>
      <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default HistorialPage