import React, { useState } from 'react'

const initState = {
    fname: "Bruce",
    lname: "Wayne"
}

export const ObjectState = () => {

    const [person, setPerson] = useState(initState); 

    // const changeName = ()=>{
    //     person.fname = "Clark";
    //     person.lname = "kent";
    //     setPerson(person);
    // }

    const changeName = ()=>{
    const newPerson = {...person};
    newPerson.fname = "Clark";
    newPerson.lname = "Kent";
    setPerson(newPerson);
    }

    console.log("Object State Render");

  return (
    <div>
    <button
    onClick={changeName}
    >{person.fname} {person.lname}</button>
    </div>
  )
}

// export default ObjectState
