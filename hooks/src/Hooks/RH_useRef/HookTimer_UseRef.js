import React, { useEffect, useRef, useState } from 'react'

function HookTimer_UseRef() {

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(); // this variable will work inside DOM also

    useEffect(()=>{

        intervalRef.current = setInterval(()=>{
            setTimer( prev => prev + 1)
        }, 1000)

        return ()=>{
            clearInterval(intervalRef.current);
        }
    }, [])

  return (
    <div>
    <h4>Count: {timer}</h4>
    <button 
    onClick={()=> clearInterval(intervalRef.current)}
    >Stop Counter</button>
      
    </div>
  )
}

export default HookTimer_UseRef
