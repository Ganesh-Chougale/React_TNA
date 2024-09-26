import React, { useRef } from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    
    function handleClick(){
        inputRef.current.focus()
    }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <br/>      <br/>
      <br/>      <br/>
      <br/>      <br/>
      <br/>      <br/>
      <button onClick={handleClick}>Focus On Input Box</button>
    </div>
  )
}

export default FocusInput
