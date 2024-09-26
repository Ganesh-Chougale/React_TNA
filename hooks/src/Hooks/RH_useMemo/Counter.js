import React, { useState } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    function increOne(){
        setCounterOne(prev => prev + 1);
    }

    function increTwo(){
        setCounterTwo(prev => prev + 1);
    }

    function isEven(){
        // to make UI render slow deliberately
        let i = 0;
        while( i<20000000000000)
            i++
        return counterOne % 2 === 0;
    }

  return (
    <div>
    <div>
        <button onClick={increOne}>Counter One : {counterOne}</button>
        <span>{isEven()? "Even" : "Odd"}</span>
    </div>
    <div>
        <button onClick={increTwo}>Counter Two : {counterTwo}</button>
    </div>
      <h1>Both counter will be render delay</h1>
    </div>
  )
}

export default Counter
