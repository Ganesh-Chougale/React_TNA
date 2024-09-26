import React, {useReducer, useContext, useEffect} from 'react'
import axios from "axios";

const initialState = {
    loading: true,
    post: [],
    error: ""
}

const reducer = (state, action) =>{
    switch(action.type){
        case "FETCH_SUCCESS":
            return {
                loading: false,
                post: action.payload,
                error: ""
            }
        case "FETCH_ERROR":
            return{
                loading: false,
                post: [],
                error: "Something went wrong!"
            }
        default:
            return state;  
    }
}

function DataFetching02() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then(response =>{
            dispatch({type: "FETCH_SUCCESS", payload: response.data})
        })
        .catch( error => {
            dispatch({type: "FETCH_ERROR"})
        })
    }, [])
        
  return (
    <div>
      { state.loading ? (<h1>Loading, Please Wait!</h1>) : (state.post.map(item => <h5 key={item.id}>{item.id}: {item.title}</h5>)) }
      { state.error ? state.error : null}
    </div>
  )
}

export default DataFetching02
