import React, { useReducer } from 'react'

const initialVal = 0;
const reducer = (state, logic)=>{
    switch(logic){
        case 'increment':
        return state + 1;
        case 'decrement':
        return state - 1;
        case 'reset':
        return initialVal;
        default:
        return state;
    }
}

function Counter03() {

    const [count, dispatch] = useReducer(reducer, initialVal);
    const [count2, dispatch2] = useReducer(reducer, initialVal);


  return (
    <>
    <div>
    <div>Counter one: {count}</div>
    <button onClick={()=> dispatch('increment')}>Increment</button>
    <button onClick={()=> dispatch('decrement')}>Decrement</button>
    <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
<span style={{width: "100px"}} />
    <div>
    <div>Counter two: {count2}</div>
    <button onClick={()=> dispatch2('increment')}>Increment</button>
    <button onClick={()=> dispatch2('decrement')}>Decrement</button>
    <button onClick={()=> dispatch2('reset')}>Reset</button>
    </div>
    </>
  )
}

export default Counter03
