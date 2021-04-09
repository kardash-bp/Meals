import React, { useRef } from 'react'
import { useTitleInput } from './hooks/useTitleInput'
//import MouseTracker from './components/MouseTracker'
import Dishes from './components/Dishes'
import DishForm from './components/DishForm'

const App = () => {
  const [name, setName] = useTitleInput('playground')
  const ref = useRef()

  return (
    <div className='main-wrapper' ref={ref}>
      {/* <MouseTracker>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
          Level Up Dishes
        </h1>
      </MouseTracker> */}
      <DishForm />
      <Dishes />
      {/* change title */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label>Enter new tab name </label> &nbsp; &nbsp;
        <input type='text' onChange={(e) => setName(e.target.value)} value={name} />
      </form>
    </div>
  )
}

export default App
