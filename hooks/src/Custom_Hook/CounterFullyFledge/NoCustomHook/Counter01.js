import React, { useState } from 'react'

function Counter01() {

    const [count, setCount] = useState(0);

    function inc(){
        setCount(prev => prev + 1);
    }

    function dec(){
        setCount(prev => prev - 1);
    }

    function res(){
        setCount(0);
    }

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
