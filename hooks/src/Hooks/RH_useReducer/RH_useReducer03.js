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

  const[count1, logic1] = useReducer(reducer, startValue)

  const[count2, logic2] = useReducer(reducer, startValue)

  return (
    <div>
        <h1>1st Counter: {count1}</h1>
        <br />
        <button onClick={()=> logic1("increment")}>Increment</button>
        <button onClick={()=> logic1("decrement")}>Decrement</button>
        <button onClick={()=> logic1("reset")}>Reset</button>

        <h1>2nd Counter: {count2}</h1>
        <br />
        <button onClick={()=> logic2("increment")}>Increment</button>
        <button onClick={()=> logic2("decrement")}>Decrement</button>
        <button onClick={()=> logic2("reset")}>Reset</button>
    </div>
  )
}

export default RH_useReducer01
