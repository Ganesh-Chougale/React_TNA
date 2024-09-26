// fecthing data from local file

import React, { useEffect, useState } from 'react';
import myData from "./myData.json";

function FileHandling() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const [error, setError] = useState("");

    useEffect(()=>{
        try {
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
                setPost(myData);
                setError("");
            }, 5000)
        } catch (error) {
            setLoading(false);
            setPost({});
            setError("SOmething went wrong");
        }
    }, []);
  return (
    <div>
    { loading? <h1>Loading, Please Wait</h1> : post.map(item => <h5 key={item.id}>{item.id}: {item.title}</h5>) }
    { error? error : null }
      
    </div>
  )
}

export default FileHandling