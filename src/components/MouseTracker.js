import React, { useState, useEffect } from 'react'

const MouseTracker = (props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouse = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    console.log(position)
  }, [position])
  return <div onMouseMove={handleMouse}>{props.children}</div>
}

export default MouseTracker
