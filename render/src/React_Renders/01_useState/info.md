> to understand this concept we need to disable ReactStrict mode, because it logs the same console twice.

```javascript
import React, { useState } from 'react'

function UseState() {

    const [count, setCount] = useState(0);

    console.log("Re-rendered"); // will give message every time after component re-render

  return (
    <div>
    
    <h3>count : {count}</h3>
    <button onClick={()=> setCount( c => c+1)} >increase 1</button>
    <button onClick={()=> setCount(0)} >Set 0</button>
    <button onClick={()=> setCount(5)} >Set 5</button>
      
    </div>
  )
}

export default UseState
```
1. Idle state => **First Log Cleared**  
⬇️
![0201](../../Images/0201.JPG)
2. Idle state => **First Log Cleared** ➡️ **increase 1(1st)** ➡️ **increase 1(2nd)**  
⬇️
![0202](../../Images/0202.JPG)


![0203](../../Images/0203.JPG)

3. Idle state => **First Log Cleared** ➡️ **Set 0(1st)** ➡️ **Set 0(2nd)**  
⬇️
![0204](../../Images/0204.JPG)
here state did not changed because current value is 0 & button setting the same to 0. so there is no change current value. hence no re-rendering occured.

4. Idle state => First Log Cleared ➡️ increase 1(1st) ➡️ increase 1(2nd) ➡️ increase 1(3rd) ➡️ increase 1(4th) ➡️ increase 1(5th) ➡️ **Set 5(1st)** ➡️ **Set 5(2nd)**
![0205](../../Images/0205.JPG)
here (**icrease 1** x 5 times) + (**set 5** x 1 time) = 6 times Re-rendered, but after that no-matter how many times you click on **set 5** it will not Re-render that component because the current value is already **5**.
![0206](../../Images/0206.JPG)


![0207](../../Images/0207.JPG)
