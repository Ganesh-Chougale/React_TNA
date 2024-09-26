import React, { useEffect, useState } from 'react'

function RH_useEffect_01() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `you clicked ${count} times`
        // Operation part (DOM for this example)
    })  // no dependancy passed which means it will run every time the any of component is rendered
    
  return (
    <div>
      <button onClick={
        ()=>{setCount(prev => prev+1)}
      }>Counter: {count}</button>
    </div>
  )
}

export default RH_useEffect_01
