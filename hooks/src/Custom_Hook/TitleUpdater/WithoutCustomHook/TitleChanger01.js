import React, { useEffect, useState } from 'react'

function TitleChanger01() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger01
