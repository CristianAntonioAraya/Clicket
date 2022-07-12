import { useState } from 'react';
import { useNavigate  } from 'react-router-dom'
import HomeSvg from '../components/icons/HomeSvg';

const LogInPage = () => {

  const desks = [1,2,3,4,5]

  const [name, setName] = useState('');
  const [desk, setDesk] = useState('1');


  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if( desk === '' || name === '') return;
    localStorage.setItem('name', name);
    localStorage.setItem('desk', desk)
    navigate('/Executive')
  }

  return (
    <div className='page__container'>
      <div className='login__content'>
          <h3>Start as executive</h3>
          <form onSubmit={ handleOnSubmit }>
            <div className='login__label-input'>
                <label>Name</label>
                <input value={name } onChange={ (e) => setName( e.target.value )}/>
            </div>
            <div className='login__container-input'>
              <div>
                  <label>Desk</label>
                  <select onChange={ (e) => setDesk( e.target.value )}>
                    {
                      desks.map( (desk, index) => (
                        <option key={index}>{ desk }</option>
                      ))
                    }
                  </select>
              </div>
              <button className='login__btn' type='submit'>Start</button>
            </div>
          </form>
                
      </div>
      <HomeSvg className="Svg__Home" onClick={ () => navigate('/')}/>
    </div>
  )
}

export default LogInPage