import React, { useMemo, useState } from 'react'

function UseMemo() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const increOne = ()=>{
        setCounterOne(prev => prev + 1);
    }
    const increTwo = ()=>{
        setCounterTwo(prev => prev + 1);
    }
    
    const isEven = useMemo(()=>{
        let i = 0;
        while(i<2000000000)
            i++
        return counterOne % 2 === 0;
    }, [counterOne])
  return (
    <div>
    <div>
      <button onClick={increOne}>Counter One: {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
    </div>
    <div>
      <button onClick={increTwo}>Counter Two: {counterTwo}</button>
    </div>
    <h1>Only counter one will be render delay</h1>

    </div>
  )
}

export default UseMemo
