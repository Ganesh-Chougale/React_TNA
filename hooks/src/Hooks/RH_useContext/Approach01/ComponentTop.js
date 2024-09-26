// mount this component to app.js
import React from 'react'
import ComponentMid from './ComponentMid'

function ComponentTop() {
  return (
    <div>
      <ComponentMid/>
      {/* imported mid component to Top */}
    </div>
  )
}

export default ComponentTop
