// useState for array
import React, { useState } from 'react'


function RH_useState_04() {

    const [items, setItems] = useState([]);

    function handleClick(){
        setItems([...items,
            {
                id: items.length,
                value: Math.floor(Math.random()*10)+1
            }
        ])
    }
    
  return (
    <div>

    <button onClick={handleClick}>Add a Number</button>


    {/*  */}
    <ul>
        {
            items.map(item => <li key='item.id'>{item.value}</li>)
        }
    </ul>
      
    </div>
  )
}

export default RH_useState_04
