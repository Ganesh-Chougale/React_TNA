import React from 'react'

function Child_Three({children, name}) {
    console.log("Child Component Rendered");
  return (
    <div>
      <p>{children} {name}</p>
    </div>
  )
}

export default Child_Three

export const MemoriezedChildThree = React.memo(Child_Three);