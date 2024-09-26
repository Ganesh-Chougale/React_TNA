import React, { useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';


function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000)

    function increAge(){
        setAge(prev => prev+1);
    }

    function increSal(){
        setSalary(prev => prev + 1000);
    }
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

export default ParentComponent
