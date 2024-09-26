### Task: create form which takes first name, last name & alert the full name 


- **NoCustomHook**
  - FormNoCustomHook.js

__FormNoCustomHook.js__
```javascript
import React, { useState } from 'react'

function FormNoCustomHook() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    function handleSubmit(){
        alert(`Hello ${firstName} ${lastName}`)
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
            <label>First Name</label>
            <input type="text" value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
        </div>
        <button>Submit</button>
    </form>
      
    </div>
  )
}

export default FormNoCustomHook
```


- 2. **WithCustomHook.js**
  - FormWithCustomHook.js
  - useInput.js

__useInput.js__
```javascript
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
```

__FormWithCustomHook.js__
```javascript

```
