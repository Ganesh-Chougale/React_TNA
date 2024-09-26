// mount this component to ComponentTop.js, to get nested
import React from 'react'
import ComponentBot from './ComponentBot'

function ComponentMid() {
  return (
    <div>
      <ComponentBot/>
    </div>
  )
}

export default ComponentMid
