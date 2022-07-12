import { useNavigate  } from 'react-router-dom'
import HomeSvg from '../components/icons/HomeSvg';

const ExecutivePage = () => {

  const desks = [1,2,3,4,5]

  const navigate = useNavigate();
  return (
    <div className='page__container'>
      <div className='executive__content'>
          <h3>Start as executive</h3>
          <form>
            <div className='executive__label-input'>
                <label>Name</label>
                <input/>
            </div>
            <div className='executive__container-input'>
              <div>
                  <label>Desk</label>
                  <select>
                    {
                      desks.map( (desk, index) => (
                        <option key={index} value={ desk }>{ desk }</option>
                      ))
                    }
                  </select>
              </div>
              <button className='executive__btn'>Start</button>
            </div>
          </form>
                
      </div>
      <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default ExecutivePage