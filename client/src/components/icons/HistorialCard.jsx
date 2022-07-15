import React from 'react'

const HistorialCard = ({ name, desk, active, number }) => {
  return (
    <div className='card__container'>
      <h3 className='card__number'>No {number}</h3>
      <div>
        <div className='card__content'>
          <span>Status: {active}</span>
          <span>Desktop: {desk}</span>
          <span>Date: 12/07/2022</span>
        </div>
        <h3 className='card__name'>Executive: {name}</h3>
      </div>
    </div>
  )
}

export default HistorialCard