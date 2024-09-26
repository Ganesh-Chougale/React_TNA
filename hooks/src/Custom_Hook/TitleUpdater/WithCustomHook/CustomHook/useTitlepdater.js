// wrap the useEffect inside new component, remove React import & <div>
// inside new component must pass dependancy as parameter
import {useEffect} from 'react'

function useTitlepdater(count) {
  return (
    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])
  )
}

export default useTitlepdater
