import React, { useContext } from 'react'
import { userAge, userName } from '../../../../App'


function ComponentC() {

    const name = useContext(userName);
    const age = useContext(userAge);
  return (
    <div>
      <h1>{name} is {age} years older</h1>
    </div>
  )
}

export default ComponentC
