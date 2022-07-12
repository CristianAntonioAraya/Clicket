import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import CloseSvg from '../components/icons/CloseSvg'
import HomeSvg from '../components/icons/HomeSvg'
import RightArrowSvg from '../components/icons/RightArrowSvg'

const ExecutivePage = () => {

  const navigate = useNavigate('')

  const [name] = useState( localStorage.getItem('name'))
  const [desk] = useState( localStorage.getItem('desk'))

  const handleLogout = () => { 
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className='page__container'>
        <CloseSvg className="svg__close" onClick={ handleLogout }/>
        <h3 className='executive__title'>{name}</h3>
        <span className='executive__desk'>You are working at desk number: {desk}</span>
        <div className='executive__arrow-icon'>
          <span>Next</span>
          <RightArrowSvg className="svg__right-arrow"/>
        </div>
        <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default ExecutivePage