// wrap the repeating inside new component, remove React import & <div>
// inside new component must pass dependancy as parameter
import {useState} from 'react'

function useCounter(intitialCount = 0, val) {
    const [count, setCount] = useState(intitialCount);

    function inc(){
        setCount(prev => prev + val);
    }

    function dec(){
        setCount(prev => prev - val);
    }

    function res(){
        setCount(intitialCount);
    }

    return [count, inc, dec, res]; // this logic requires return statement
}

export default useCounter
