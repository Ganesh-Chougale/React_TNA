import React, { useState } from 'react'

function RH_useState() {

    const [number, setNumber] = useState(0);
    // useState use array to keep track on changes

    function handleClick(){
        if(number>0){
            setNumber(number-1);
        }else{
            alert("Value cannot go below zero")
        }
    }

  return (
    <div>

    <h1>The count is: {number}</h1>
    {/* number is state variable */}

      <button onClick={()=> setNumber(number+1)}>Increment: {number}</button>
    {/* Using arrow function */}
      <button onClick={handleClick}>Decrement: {number}</button>
    {/* Using external function */}

    </div>
  )
}

export default RH_useState
