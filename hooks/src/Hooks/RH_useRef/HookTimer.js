import React, { useEffect, useState } from 'react'

function HookTimer() {

    const [timer, setTimer] = useState(0);

    useEffect(()=>{

        const interval = setInterval(()=>{
            setTimer( prev => prev + 1)
        }, 1000)

        return ()=>{
            clearInterval(interval);
        }
    }, [])

  return (
    <div>
    <h4>Count: {timer}</h4>
    <button 
    onClick={()=> clearInterval(interval)}
    >Stop Counter</button>
      
    </div>
  )
}

export default HookTimer


// will give error: 'interval' is not defined  no-undef
// for this we need useRef() hook