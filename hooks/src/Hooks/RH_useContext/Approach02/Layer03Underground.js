import React from 'react'
import {useContext} from 'react';

import {userContext, cityContext} from "../../../App"

function Layer03Underground() {

    const user = useContext(userContext);
    const city = useContext(cityContext);
  return (
    <div>
    <h1>username is {user} & he lives in {city}</h1>
    </div>
  )
}

export default Layer03Underground
