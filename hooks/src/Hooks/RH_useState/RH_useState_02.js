import React, { useState } from 'react'

function RH_useState_01() {


  let initialValue = 0;
  const [num, setNum] = useState(initialValue);
  function add5(){
    for(let i=0; i<5; i++){
      setNum(num+1);
    }
  }
  // not ideal way to use useState





  let startingValue = 0;
  const [val, setVal] = useState(startingValue)
  function sum5(){
    for(let i=0; i<5; i++){
      setVal(prevVal => prevVal + 1);
    }
  }
  // ideal way to use useState
  return (
    <div>

    <div id='notIdeal'>
    <h1>Counter: {num}</h1>
      <button onClick={ ()=> setNum(num+1)}>Incement</button>
      <button onClick={ ()=> setNum(num-1)}>Decrement</button>
      <button onClick={ ()=> setNum(initialValue)}>Reset</button>
      <button onClick={add5}>Add 5</button>
    <h2>Not ideal useState</h2>
    </div>

    <div id='Ideal'>
    <h1>Counter: {val}</h1>
      <button onClick={ ()=> setVal(prev => prev + 1)}>Incement</button>
      <button onClick={ ()=> setVal(prev => prev - 1)}>Decrement</button>
      <button onClick={ ()=> setVal(startingValue)}>Reset</button>
      <button onClick={sum5}>Sum 5</button>
    <h2>Ideal way useState</h2>
    </div>
      
    </div>
  )
}

export default RH_useState_01
