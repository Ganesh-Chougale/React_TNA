import React, { useState } from 'react'
import { MemorizedChildTwo } from './ChildTwo';

function ParentTwo() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Ganesh");

    console.log("Parent Two Rendered");

  return (
    <div>
      <h3>{count}</h3>

      {/* nextline is only Child Component */}
      <MemorizedChildTwo name={name}/>

      <button onClick={()=> setCount(c=>c+1)}>Add One</button>
      <button onClick={()=> setName("Gorav")}>Change Name</button>
    </div>
  )
}

export default ParentTwo