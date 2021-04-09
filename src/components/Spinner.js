import React from 'react'
import spinner from '../spinner.gif'
const Spinner = () => {
  return (
    <div style={{ width: '200px', height: 'auto', margin: '0 auto' }}>
      <img src={spinner} alt='loading spinner' />
    </div>
  )
}

export default Spinner
