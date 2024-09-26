import React, { useReducer } from 'react';

const startValue = {
  Counter_One: 0,
  Counter_Two: 10
};

function reducer(currentState, operation){

  switch(operation.type){
    case "increment":
      return {...currentState, Counter_One : currentState.Counter_One + operation.value};
    case "decrement":
      return {...currentState, Counter_One : currentState.Counter_One - operation.value};
    // counter 1
    case "increment5":
      return {...currentState, Counter_Two : currentState.Counter_Two + operation.value};
    case "decrement5":
      return {...currentState, Counter_Two : currentState.Counter_Two - operation.value};
    // counter 2
    case "reset":
      return startValue;
    default:
      return currentState;
  }
  
}

function RH_useReducer02() {

  const[count, logic] = useReducer(reducer, startValue)

  return (
    <div>
        <h1>First Counter: {count.Counter_One}</h1>
        <h1>Second Counter: {count.Counter_Two}</h1>
        <br />

        <button onClick={()=> logic({type:"increment", value:1})}>Add 1</button>
        <button onClick={()=> logic({type:"decrement", value:1})}>Sub 1</button>
        {/* Counter 1 */}
        
        <div purpose="add by 5">
        <button onClick={()=> logic({type:"increment5", value:5})}>Add 5</button>
        <button onClick={()=> logic({type:"decrement5", value:5})}>Sub 5</button>
        </div>
        {/* Counter 2 */}

        <button onClick={()=> logic({type:"reset"})}>Reset</button>
    </div>
  )
}

export default RH_useReducer02
