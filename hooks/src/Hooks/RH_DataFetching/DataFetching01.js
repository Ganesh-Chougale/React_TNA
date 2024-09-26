// fetching all data online: https://jsonplaceholder.typicode.com/posts

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching01() {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState("");

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(response =>{
            setLoading(false);
            setPost(response.data);
            setError("");
        })
        .catch(error => {
            setLoading(false);
            setPost({});
            setError("Something went wrong!");
        })
    })

  return (
    <div>
      {loading? <h1>Loading Please Wait</h1> : post.map(item=> <h3>{item.id}: {item.title}</h3>)}
      {error? <h1>{error}</h1> : null}
    </div>
  )
}

export default DataFetching01
