import React from 'react'

const TableTitle = ( { text }) => {
  return (
    <div className='table__container'>
        <div className='table__line'/>
        <h3>{text}</h3>
        <div className='table__line'/>
    </div>
  )
}

export default TableTitle