import React from 'react'
import { UserContext, ageContext } from '../../../../App'

function ComponentC() {
  return (
    <div>
        <UserContext.Consumer>
      {
            user => {
                return (
                    <ageContext.Consumer>
                    {
                    age =>
                            <h1>{user} is {age} years old</h1>
                    }
                    </ageContext.Consumer>
                ) 
            }
      }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
