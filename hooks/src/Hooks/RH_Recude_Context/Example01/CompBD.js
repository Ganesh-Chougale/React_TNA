import React, { useContext } from 'react'
import { COUNT_CONTEXT_APP } from '../../../App'

function CompBD() {

    const COUNT_CONETEXT_BD = useContext(COUNT_CONTEXT_APP);

  return (
    <div>
    <h5>Component B =&gt; BD</h5> 
      <button onClick={()=> COUNT_CONETEXT_BD.countDispatch("increment")}>Increment</button>
      <button onClick={()=> COUNT_CONETEXT_BD.countDispatch("decrement")}>Decrement</button>
      <button onClick={()=> COUNT_CONETEXT_BD.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default CompBD
