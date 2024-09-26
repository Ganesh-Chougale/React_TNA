import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);

    console.log("Re-rendered"); // will give message every time after component re-render

  return (
    <div>
    
    <h3>count : {count}</h3>
    <button onClick={()=> setCount( c => c+1)} >increase 1</button>
    <button onClick={()=> setCount(0)} >Set 0</button>
    <button onClick={()=> setCount(5)} >Set 5</button>
      
    </div>
  )
}

export default UseState
