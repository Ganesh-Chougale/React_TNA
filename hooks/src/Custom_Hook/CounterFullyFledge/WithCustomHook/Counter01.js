import React from 'react'
import useCounter from './CustomHook/useCounter' // import custom hook

function Counter01() {

    const [count, inc, dec, res] = useCounter(0,1) // pass the parametersS
    // replace repeatative logic with customHook

  return (
    <div>
    <h2>Value: {count}</h2>  
    <button onClick={inc} >Increment</button>
    <button onClick={dec} >Decrement</button>
    <button onClick={res} >Reset</button>
    </div>
  )
}

export default Counter01