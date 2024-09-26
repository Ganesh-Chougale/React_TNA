**info**
state is variable or value of variable, useState persists the value of state & update it in every occurance whenever the changes happens

**Rules**
__1__
Only call Hooks at the Top level
-Don't call Hooks inside loops, conditions or nested function
__2__
Only call Hooks from React Functions
-Call them from within react functional components and not just any regular javascript function


**Syntax**
`const [variable, setVariable] = useState(initialValue);`

    variable        = variable
    setVariable     = setter function of that variable
    initialValue    = starting value of the state


