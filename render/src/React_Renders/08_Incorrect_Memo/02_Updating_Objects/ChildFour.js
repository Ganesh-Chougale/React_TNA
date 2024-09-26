import React from 'react'

function ChildFour({children, name}) {
    console.log("Child Component Rendered");
    const date = new Date();
  return (
    <div>
    <h3>{children} {name} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h3>
    </div>
  )
}

export default ChildFour

export const MemorizedPF = React.memo(ChildFour);
