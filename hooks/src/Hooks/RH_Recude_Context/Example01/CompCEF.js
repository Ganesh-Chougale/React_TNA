import React, { useContext } from 'react'
import { COUNT_CONTEXT_APP } from '../../../App'

function CompCEF() {

    const COUNT_CONTEXT_CE = useContext(COUNT_CONTEXT_APP)
  return (
    <div>
    <h5>Component C =&gt; CE +&gt; CEF</h5>
    <button onClick={()=> COUNT_CONTEXT_CE.countDispatch("increment")}>Increment</button>
    <button onClick={()=> COUNT_CONTEXT_CE.countDispatch("decrement")}>Decrement</button>
    <button onClick={()=> COUNT_CONTEXT_CE.countDispatch("reset")}>Reset</button>
      
    </div>
  )
}

export default CompCEF
