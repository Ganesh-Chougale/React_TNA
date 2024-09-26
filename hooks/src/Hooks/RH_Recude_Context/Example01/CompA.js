import React, { useContext } from 'react'
import { COUNT_CONTEXT_APP } from '../../../App'

function CompA() {
    
    const COUNT_CONTEXT_A = useContext(COUNT_CONTEXT_APP)

  return (
    <div>
    <h5>Component A</h5>
    <button onClick={()=>COUNT_CONTEXT_A.countDispatch("increment")}>Increment</button>
    <button onClick={()=>COUNT_CONTEXT_A.countDispatch("decrement")}>Decrement</button>
    <button onClick={()=>COUNT_CONTEXT_A.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default CompA
