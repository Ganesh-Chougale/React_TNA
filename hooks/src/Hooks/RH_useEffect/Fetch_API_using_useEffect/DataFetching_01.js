import React, { useEffect, useState } from 'react'
import axios from 'axios';

function DataFetching_01() {

    const [eData, setEdata] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        // below is promise part
        .then(res=>{
            console.log(res);
            setEdata(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []) // empty dependancy or it will log the data in infinite loop

  return (
    <div>
      <ul>
        {
            eData.map(gibber => <li key={gibber.id}>{gibber.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching_01
