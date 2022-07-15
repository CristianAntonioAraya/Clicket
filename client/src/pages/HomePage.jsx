import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='page__container'>
      <ul className='home__list'>
        <li className='home__item'>
          <Link to='/Historial' className='home__link' >
            Historial
          </Link>
        </li>
        <li className='home__item'>
          <Link to='/Login' className='home__link'>
            Executive
          </Link>
        </li>
        <li className='home__item'>
          <Link to='/Client' className='home__link'>
            Client
          </Link>
        </li>
      </ul>
      <h1 className='home__title'>
        Clicket
      </h1>
    </div>
  )
}

export default HomePage