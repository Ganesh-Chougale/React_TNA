import React from 'react'

function ChildFive({person}) {
    console.log("Child Rendered");
  return (
    <div>
      <h3>hello {person.fname} {person.lname}</h3>
    </div>
  )
}

export default ChildFive

export const MemoCFive = React.memo(ChildFive)