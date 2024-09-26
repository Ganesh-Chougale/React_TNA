import {useState} from 'react'

function useInput(inVal) {
    const [val, setVal] = useState(inVal)
    function reset(){
        setVal(inVal);
        const bind = {
            val: val,
            onchange: e => {
                setVal(e.target.value)
            }
        }
        return [val, bind, reset]
    }

}

export default useInput
