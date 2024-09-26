import React, { useEffect, useState } from 'react'

function RH_useEffect_05() {

    const [count, setCount] = useState(0)

    function tick(){
        setCount(count+1)
    }


    useEffect(()=>{
        const fanning = setInterval(tick, 1000);
        return ()=>{
            clearInterval(fanning);
        }
        // return statement = unmounting
    }, [count])
    // if we leave dependacy empty it will run only once, so we need to tell what dependancy will trigger useEffect
    // also if we use prev => prev+1 instead of count+1, in this case we dont need to pass dependacy, it will work fine with empty[]

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default RH_useEffect_05
