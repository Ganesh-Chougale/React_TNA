// limiting the execution by passing the depedancy

import React, { useEffect, useState } from 'react'

function RH_useEffect_02() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log("Rerendering");
        document.title = `clicked ${count} times`
    }, [count]) // count is a dependancy, means useEffect will only run if this dependacy renders

  return (
    <div>

    <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
    <button onClick={()=>setCount(prev=>prev+1)}>Count: {count}</button>
      
    </div>
  )
}

export default RH_useEffect_02
