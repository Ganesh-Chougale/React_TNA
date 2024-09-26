import React, { useState } from 'react'
import { MemoriezedChildThree } from './Child_Three';

function Parent_Three() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Bruce");

    console.log("Parent Component Rendered");
  return (
    <div>
    
    <h3>Count: {count}</h3>
    <button onClick={()=> setCount(c => c+1)} >Add</button>
    <MemoriezedChildThree name={name}>
    <strong>Hello</strong>
    </MemoriezedChildThree>
    <button onClick={()=> setName("Clark")} >Change Name</button>
      
    </div>
  )
}

export default Parent_Three