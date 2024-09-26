import React, {useContext} from 'react'
import { CountContext } from './ParentRC';

export function ChildA() {
    console.log("Child A Rendered");
  return (
    <div>
      <h3>Child A</h3>
      <ChildB />
    </div>
  )
}
export function ChildB() {
    console.log("Child B Rendered");
  return (
    <div>
      <h3>Child B</h3>
      <ChildC />
    </div>
  )
}
export function ChildC() {
    const variAble = useContext(CountContext) 
    console.log("Child C Rendered");
  return (
    <div>
      <h3>Child C: {variAble}</h3>
    </div>
  )
}
