import React, { useReducer } from 'react';

const startValue = 0;

function reducer(currentState, operation){

  switch(operation){
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return startValue;
    default:
      return currentState;
  }
  
}

function RH_useReducer01() {

  const[count, logic] = useReducer(reducer, startValue)

  return (
    <div>
        <h1>Counter: {count}</h1>
        <br />
        <button onClick={()=> logic("increment")}>Increment</button>
        <button onClick={()=> logic("decrement")}>Decrement</button>
        <button onClick={()=> logic("reset")}>Reset</button>
    </div>
  )
}

export default RH_useReducer01
