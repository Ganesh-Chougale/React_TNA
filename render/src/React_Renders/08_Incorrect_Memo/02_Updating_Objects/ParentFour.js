import React, { useState } from 'react'
import { MemorizedPF } from './ChildFour';

function ParentFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Bruce");
    console.log("Parent Component Rendered");
  return (
    <div>
    <h3>Count: {count}</h3>
    <button onClick={()=> setCount(c=>c+1)}>Add</button>
    <MemorizedPF name={name} />
    <button onClick={()=>setName("Clark")} >Change Name</button>
    </div>
  )
}

export default ParentFour
