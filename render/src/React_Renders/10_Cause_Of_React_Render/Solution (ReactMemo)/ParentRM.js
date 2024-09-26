import React, { useState } from 'react'
import { MemorisedChildA } from './ChildrenRM';

export const CountContext = React.createContext();
const ContextProvider = CountContext.Provider;

function ParentRM() {
    const [count, setCount] = useState(0)

    console.log("Parent Rendered");
  return (
    <div>
    <h3>Count: {count}</h3>
    <button onClick={()=>setCount(c=>c+1)}>Add</button>
    <ContextProvider value={count}>
        <MemorisedChildA />
    </ContextProvider>

    </div>
  )
}

export default ParentRM