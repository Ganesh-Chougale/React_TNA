import React from 'react'
import {userContext, cityContext} from "../../../App";

function ComponentBot() {
  return (
    <div>
      <h1>someTitle</h1>
      <userContext.Consumer>
        {
          user =>{
            return (
              <cityContext.Consumer>
              {
                city =>{
                  return <div>username: {user}, city: {city}</div>

                }
              }

              </cityContext.Consumer>
            )
          }
        }
      </userContext.Consumer>
    </div>
  )
}

export default ComponentBot
