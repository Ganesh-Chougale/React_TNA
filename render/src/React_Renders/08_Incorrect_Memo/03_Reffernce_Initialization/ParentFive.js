import React, { useState } from 'react'
import { MemoCFive } from './ChildFive';

function ParentFive() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Ganesh");

    const person = {
        fname: "Bruce",
        lname: "Wayne"
    }

    console.log("Parent Rendered");
  return (
    <div>

    <h3>Count: {count}</h3>
    <button onClick={()=>setCount(c=>c+1)}>Add</button>

    <MemoCFive person={person} />

      
    </div>
  )
}

export default ParentFive