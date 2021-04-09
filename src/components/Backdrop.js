import React from 'react'
import ReactDOM from 'react-dom'
const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.55)',
  zIndex: 10
}
const Backdrop = (props) => {
  return <div style={style} onClick={props.close}></div>
}

export default Backdrop
