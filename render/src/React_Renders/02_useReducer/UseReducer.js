import React, { useReducer } from 'react'


const intialState = 0;

const reducer = (state, action) => {
    switch(action){
        case "increment":   return state + 1;
        case "decrement":   return state - 1;
        case "reset":       return intialState;    
        default:            return state;    
    }
}

function UseReducer() {

    const [count, dispatch] = useReducer(reducer, intialState);

    console.log("Re-rendered");
  return (
    <div>
    <h3>{count}</h3>
    <button onClick={()=> dispatch("increment")} >Increment</button>
    <button onClick={()=> dispatch("decrement")} >Decrement</button>
    <button onClick={()=> dispatch("reset")} >Reset</button>
      
    </div>
  )
}

export default UseReducer
