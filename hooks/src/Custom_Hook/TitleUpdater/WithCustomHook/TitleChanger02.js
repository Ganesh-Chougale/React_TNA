import React, { useState } from 'react'
import useTitlepdater from './CustomHook/useTitlepdater'; // import the custome Hook

function TitleChanger02() {
    const [count, setCount] = useState(0);

    useTitlepdater(count);
    // remove useEffect + import & use custome Hook instead

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger02
