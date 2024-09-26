import React, { useCallback, useMemo, useState } from 'react'
import { MemoCX } from './ChildSix';

function ParentSix() {

    const [count, setCount] = useState(0);

    const handleClick = ()=>{}

    const MemorizedClick = useCallback(handleClick, [])

    console.log("Parent Rendered");

  return (
    <div>
    <h3>Count: {count}</h3>
    <button onClick={()=> setCount(c=> c+1)} >Add</button>

    <MemoCX clicked ={MemorizedClick} />
      
    </div>
  )
}

export default ParentSix
