import React from 'react'

function ChildTwo({name}) {
    console.log("Child Two Rendered");
  return (
    <div>
      <h3>{name}</h3>
    </div>
  )
}

export default ChildTwo

export const MemorizedChildTwo = React.memo(ChildTwo);
