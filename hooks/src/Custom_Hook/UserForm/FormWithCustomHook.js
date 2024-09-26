import React, { useState } from 'react'

function FormWithCustomHook() {

    const [firstName, bindFirstName, resetFirstName] = useState("") // used custom Hook here
    const [lastName, bindLastName, resetLastName] = useState("") // used custom Hook here
    
    function handleSubmit(){
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()    // from custom Hook
        resetLastName()     // from custom Hook
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName}
                {... bindFirstName} // this to replace onChange functionality
            />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName}
                {... bindLastName} // this to replace onChange functionality
            />
        </div>
        <button>Submit</button>
    </form>
      
    </div>
  )
}

export default FormWithCustomHook