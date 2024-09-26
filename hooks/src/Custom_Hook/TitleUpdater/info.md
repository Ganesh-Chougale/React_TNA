### the task is to create 2 button components which will increase the count & count will be render as document.title

- 1. **NoCustomHook**
    - TitleChanger01.js
    - TitleChanger02.js

here both component have same code, which we dont want

- **TitleChanger01.js**:
```javascript
import React, { useEffect, useState } from 'react'

function TitleChanger01() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger01
```
- **TitleChanger02.js**:
```javascript
import React, { useEffect, useState } from 'react'

function TitleChanger02() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Title ${count}`
    },[count])

  return (
    <div>
    <button onClick={()=> setCount(prev => prev + 1)}
    >Count {count}</button>  
    </div>
  )
}

export default TitleChanger02
```

- 2. **WithCustomHook**
    - TitleChanger01.js
    - TitleChanger02.js
    - **CustomHook**
      - useTitlepdater.js

- **useTitlepdater.js**
```javascript
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
```

- **TitleChanger01.js**
```javascript
import React, { useState } from 'react'
import useTitlepdater from './Hook/useTitlepdater'; // import the custome Hook

function TitleChanger01() {
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

export default TitleChanger01
```

- **TitleChanger02.js**
```javascript
import React, { useState } from 'react'
import useTitlepdater from './Hook/useTitlepdater'; // import the custome Hook

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
```