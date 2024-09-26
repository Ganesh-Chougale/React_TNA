import React, { useState } from 'react'
import PCC_Child from './PCC_Child';

function PCC_Parent() {

    const [count, setCount]= useState(0);

    console.log("Parent Rendered");

  return (
    <div>

    <h3>{count}</h3>
    <button onClick={()=> setCount((c)=> c+1)} >Add One</button>
    <button onClick={()=> setCount(0)} >Reset</button>
    <button onClick={()=> setCount(5)} >Add 5</button>

    <PCC_Child />
      
    </div>
  )
}

export default PCC_Parent
