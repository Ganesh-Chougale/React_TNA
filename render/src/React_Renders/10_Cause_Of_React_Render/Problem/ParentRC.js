import React, { useState } from 'react'
import { ChildA } from './ChildrenRC';

export const CountContext = React.createContext();
const CountProvider = CountContext.Provider; 

function ParentRC() {
    const [count, setCount] = useState(0);
    console.log("Parent Rendered");
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={()=> setCount(c=>c+1)} >Add</button>

      <CountProvider value={count}>
            <ChildA />
      </CountProvider>

    </div>
  )
}

export default ParentRC
