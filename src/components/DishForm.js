import React, { useState, useRef } from 'react'
import Backdrop from './Backdrop'
import FormElement from './FormElement'
import { useBodyScrollLock } from '../hooks/bodyScrollLock'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import './dishForm.css'
const DishForm = (props) => {
  const [isToggled, setIsToggled] = useState(false)
  const ref = useRef()

  useOnClickOutside(ref, () => setIsToggled(false))

  useBodyScrollLock(isToggled)
  return (
    <>
      <div className='form-card' ref={ref}>
        {isToggled ? (
          <>
            <Backdrop close={() => setIsToggled(false)} />
            <FormElement
              input={{ id: 'dishName', type: 'text', label: 'Enter Dish Name' }}
            />
          </>
        ) : (
          <button onClick={() => setIsToggled(true)}>Open</button>
        )}
      </div>
    </>
  )
}

export default DishForm
