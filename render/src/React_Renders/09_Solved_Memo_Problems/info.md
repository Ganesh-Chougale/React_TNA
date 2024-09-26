in last session : 08_incorrect_Memo/03_Reffernce_Initialization
we seen how initialization from parent component re-renders both parent & passed child component

now lets take action to solve that issue

# 1. for Objects (useMemo)
## Problem

## Parent
```javascript
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
```
```javascript
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
```
1. Idle state => **First Log Cleared** ➡️ **Add (x3)**  
⬇️  
![0806](../../Images/0806.png) 
here we can see the re-rendering happening
Reason is we passed object from parent to child, when parent re-renders the object from parent get re-initialized thus reference get re-initialized causing child re-rendering.

## Solution

## Parent
```javascript
// import React, { useMemo, useState } from 'react'
// import { MemoCX } from './ChildSix';

// function ParentSix() {

//     const [count, setCount] = useState(0);

//     const person = {
//         fname: "Bruce",
//         lname: "Wayne"
//     }

    const MemorisedPerson = useMemo(()=> person, []);

//     console.log("Parent Rendered");

//   return (
//     <div>

//     <h3>Count: {count}</h3>
//     <button onClick={()=> setCount(c=> c+1)} >Add</button>

    <MemoCX person={MemorisedPerson} />
      
//     </div>
//   )
// }

// export default ParentSix
```
## Child
no changes in child


1. Idle state => **First Log Cleared** ➡️ **Add (x4)**  
⬇️  
![0901](../../Images/0901.png)

# 1. for Function
## Problem

## Parent
```javascript
import React, { useMemo, useState } from 'react'
import { MemoCX } from './ChildSix';

function ParentSix() {

    const [count, setCount] = useState(0);

    const handleClick = ()=>{}


    console.log("Parent Rendered");

  return (
    <div>
    <h3>Count: {count}</h3>
    <button onClick={()=> setCount(c=> c+1)} >Add</button>

    <MemoCX clicked ={handleClick} />
      
    </div>
  )
}

export default ParentSix
```

## Child
```javascript
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
```

2. Idle state => **First Log Cleared** ➡️ **Add (x3)**  
⬇️  
![0902](../../Images/0902.png)

## Solution

## Parent
```javascript
// import React, { useCallback, useMemo, useState } from 'react'
// import { MemoCX } from './ChildSix';

// function ParentSix() {

//     const [count, setCount] = useState(0);

//     const handleClick = ()=>{}

    const MemorizedClick = useCallback(handleClick, [])

//     console.log("Parent Rendered");

//   return (
//     <div>
//     <h3>Count: {count}</h3>
//     <button onClick={()=> setCount(c=> c+1)} >Add</button>

    <MemoCX clicked ={MemorizedClick} />
      
//     </div>
//   )
// }

// export default ParentSix
```
## Child
no changes in child

3. Idle state => **First Log Cleared** ➡️ **Add (x3)**  
⬇️  
![0903](../../Images/0903.png)