import React, { useState } from 'react'
import RH_useEffect_03 from './RH_useEffect_03'

function RH_useEffect_04() {

    const [display, setDisplay] = useState(true)

  return (
    <div>
    <button onClick={()=> setDisplay(!display)}>Toggle Display</button>  
    {display && <RH_useEffect_03/>} 
    {/* from <RH_useEffect_03/> used return statement to stop memory leak */}
    </div>
  )
}

export default RH_useEffect_04
