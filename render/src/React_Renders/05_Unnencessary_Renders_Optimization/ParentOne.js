import React, { useState } from 'react'

function ParentOne({children}) {

    const [count, setCount] = useState(0);

    console.log("ParentOne Rendered");

  return (
    <div>
    <h3>{count}</h3>
    <button onClick={()=> setCount((c)=>c+1)} >Add 1</button>
    {children}
    </div>
  )
}

export default ParentOne
