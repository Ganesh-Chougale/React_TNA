import React, { useState } from 'react'

const initState = ["Bruce", "Wayne"];

const ArrayState = () => {

    const [person, setPerson] = useState(initState);

    // const handleClick = ()=>{
    //     person.push("Clark");
    //     person.push("Kent");
    //     setPerson(person)
    // }

    function handleClick(){
        const newPerson = [...person];
        newPerson.push("Clark");
        newPerson.push("Kent");
        // newPerson[0] = "Clark"
        // newPerson[1] = "Kent"
        setPerson(newPerson);
    }

    console.log("Array useState Rendered");
  return (
    <div>
    {
        person.map(item => <h3 key={item} >{item}</h3>)
    }
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ArrayState
