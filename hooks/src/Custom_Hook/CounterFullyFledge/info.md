### the task is to create 2 button counter components which will have functionality of increment, decrement & reset the value

- 1. **NoCustomHook**
    - Counter01.js
    - Counter02.js

here both component have same code, which we dont want

- **Counter01.js**:
```javascript
import React, { useState } from 'react'

function Counter01() {

    const [count, setCount] = useState(0);

    function inc(){
        setCount(prev => prev + 1);
    }

    function dec(){
        setCount(prev => prev - 1);
    }

    function res(){
        setCount(0);
    }

  return (
    <div>
    <h2>Value: {count}</h2>  
    <button onClick={inc} >Increment</button>
    <button onClick={dec} >Decrement</button>
    <button onClick={res} >Reset</button>
    </div>
  )
}

export default Counter01

```
- **Counter02.js**:
```javascript
import React, { useState } from 'react'

function Counter02() {

    const [count, setCount] = useState(0);

    function inc(){
        setCount(prev => prev + 1);
    }

    function dec(){
        setCount(prev => prev - 1);
    }

    function res(){
        setCount(0);
    }

  return (
    <div>
    <h2>Value: {count}</h2>  
    <button onClick={inc} >Increment</button>
    <button onClick={dec} >Decrement</button>
    <button onClick={res} >Reset</button>
    </div>
  )
}

export default Counter02
```

- 2. **WithCustomHook**
    - Counter01.js
    - Counter02.js
    - **CustomHook**
      - useCounter.js

- **useCounter.js**
```javascript
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
```

- **Counter01.js**
```javascript
import React from 'react'
import useCounter from './CustomHook/useCounter' // import custom hook

function Counter01() {

    const [count, inc, dec, res] = useCounter(0,1) // pass the parametersS
    // replace repeatative logic with customHook

  return (
    <div>
    <h2>Value: {count}</h2>  
    <button onClick={inc} >Increment</button>
    <button onClick={dec} >Decrement</button>
    <button onClick={res} >Reset</button>
    </div>
  )
}

export default Counter01
```

- **Counter02.js**
```javascript
import React from 'react'
import useCounter from './CustomHook/useCounter' // import custom hook

function Counter02() {

    const [count, inc, dec, res] = useCounter(10,10) // pass the parametersS
    // replace repeatative logic with customHook

  return (
    <div>
    <h2>Value: {count}</h2>  
    <button onClick={inc} >Increment</button>
    <button onClick={dec} >Decrement</button>
    <button onClick={res} >Reset</button>
    </div>
  )
}

export default Counter02
```