import React, { useLayoutEffect, useRef } from 'react'
import './formElement.css'
const FormElement = ({ input }) => {
  const inputGroupRef = useRef()
  const inputRef = useRef()

  useLayoutEffect(() => {
    const handleFocus = () => inputGroupRef.current.classList.add('active')
    //const handleBlur = () => inputGroupRef.current.classList.remove('active')
    const { current } = inputRef
    current.addEventListener('focus', handleFocus)
    //current.addEventListener('blur', handleBlur)

    return () => {
      current.removeEventListener('focus', handleFocus)
      // current.removeEventListener('blur', handleBlur)
    }
  }, [])
  return (
    <form>
      <div
        ref={inputGroupRef}
        className='inputGroup'
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <label className='label' htmlFor='dishName'>
          {input.label}
        </label>
        <input
          ref={inputRef}
          className='input border'
          type={input.type}
          id={input.id}
        />
      </div>
    </form>
  )
}

export default FormElement
