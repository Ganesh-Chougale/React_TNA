// same as DataFetching_01 but modified to fetch data by targetting (id or etc).

import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFetching_02() {

    const [eData, setEdata] = useState({}); // changed arrays to single object
    const [id, setId] = useState(""); // need useState to store id
    const [buttonId, setButtonId] = useState();

    function handleClick(){
        setButtonId(id)
    } // to get id from input & set target

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) // appended url with ${id}, use backticks instead of string
        // below is promise part
        .then(res=>{
            console.log(res);
            setEdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [buttonId]) // strictly pass the dependacy in this case its a buttonId

  return (
    <div>

    <input onChange={e=> setId(e.target.value)} value={id}
    type="number" placeholder='enter id to target' />
    <button type='button' onClick={handleClick}>Fetch post</button>
    <h1>{eData.title}</h1>


      {/* <ul>
        {
            eData.map(gibber => <li key={gibber.id}>{gibber.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFetching_02
