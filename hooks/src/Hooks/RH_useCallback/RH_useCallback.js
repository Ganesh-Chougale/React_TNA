import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';


function RH_useCallback() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000)
    
    const increAge = useCallback(()=>{
        setAge(prev => prev+1);
    },[age])

    const increSal = useCallback(()=>{
        setSalary(prev => prev + 1000);
    },[salary])
    
  return (
    <div>
        <Title/>
        <Count text="Age" count={age} />
        <Button handleClick={increAge}>Increment Age</Button>
        <Count text="Salary" count={salary} />
        <Button handleClick={increSal}>Increment Salary</Button>
    </div>
  )
}

export default RH_useCallback
