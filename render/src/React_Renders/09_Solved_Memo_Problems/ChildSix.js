import React from 'react'

function ChildSix({clicked}) {
    console.log("Child Rendered");
  return (
    <div>
      <h3>Hello</h3>
    </div>
  )
}

export default ChildSix;

export const MemoCX = React.memo(ChildSix)
