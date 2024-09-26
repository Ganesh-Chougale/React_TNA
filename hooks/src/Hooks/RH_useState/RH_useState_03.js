// useState for object
import React, { useState } from 'react'

function RH_useState_03() {

    const [name, setName] = useState({firstname: "", lastname: ""});


  return (
    <div>
    <form action="">
        <input type="text" value={name.firstname}
            onChange={e=>setName({firstname: e.target.value})}
            // onChange={e=>setName({...name, firstname: e.target.value})}  // used spread operator to fill data persistantly
        />
        <input type="text" value={name.lastname}
            onChange={e=>setName({lastname: e.target.value})}
            // onChange={e=>setName({...name, lastname: e.target.value})} // used spread operator to fill data persistantly
        />
        <h2>Your first name is: {name.firstname}</h2>
        <h2>Your last name is: {name.lastname}</h2>
        <h2>Your full name is: {`${name.firstname} ${name.lastname}`}</h2>
        <h2>Your full name is: {`${name.firstname} ${name.lastname}`}</h2>
    </form>  
    </div>
  )
}

export default RH_useState_03
