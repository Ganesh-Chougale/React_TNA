import React, { useEffect, useState } from 'react'

function RH_useEffect_03() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    function cursorPosition(e){
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect Run");
        window.addEventListener('mousemove', cursorPosition)

        // ignore return statement for now
        return ()=>{
          console.log("Component unmounting code");
          window.removeEventListener('mousemove', cursorPosition)
        }

    }, []) // empty dependancy mean run only once

  return (
    <div>
    <h1>Position X - {x} Y - {y}</h1>
    </div>
  )
}

export default RH_useEffect_03
