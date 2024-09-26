import React, { useContext } from 'react'
import { CountContext } from './ParentRM';

export function ChildA() {
    console.log("ChildA Rendered");
  return (
    <div>
      <h3>ChildA</h3>
      <ChildB />
    </div>
  )
}
/////////////////////////////////
export const MemorisedChildA = React.memo(ChildA);

export function ChildB() {
    console.log("ChildB Rendered");
  return (
    <div>
      <h3>ChildB</h3>
      <ChildC />
    </div>
  )
}
/////////////////////////////////
export function ChildC() {
    const variAble = useContext(CountContext)
    console.log("ChildC Rendered");
  return (
    <div>
      <h3>ChildC: {variAble}</h3>
    </div>
  )
}

