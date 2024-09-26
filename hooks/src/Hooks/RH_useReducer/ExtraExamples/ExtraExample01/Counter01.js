import React, { useReducer } from 'react'

const initialVAl = 0;

const reducer = (val, logic)=>{
  switch(logic){
    case "incement":
      return val + 1;
    case 'decrement':
      return val - 1;
    case 'reset':
      return initialVAl;
      default:
      return val;
  }
};

function Counter01() {

  const [count, dispatch] = useReducer(reducer, initialVAl);

  return (
    <div>
    <div>Count: {count}</div>
      <button onClick={ ()=> dispatch("incement")}>Increment</button>
      <button onClick={ ()=> dispatch("decrement")}>Decrement</button>
      <button onClick={ ()=> dispatch("reset")}>Reset</button>
    </div>
  )
}

export default Counter01
