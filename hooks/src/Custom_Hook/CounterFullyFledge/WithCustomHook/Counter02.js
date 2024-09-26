import React from 'react'
import useCounter from './CustomHook/useCounter' // import custom hook

function Counter02() {

    const [count, inc, dec, res] = useCounter(10,10) // pass the parametersS
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

export default Counter02