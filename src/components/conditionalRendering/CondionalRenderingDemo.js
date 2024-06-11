//?Conditional Rendering using Ternary Operater


import React from 'react'
export default function CondionalRenderingDemo() {
  let x = 3;
  // let x = prompt('Enter a Number')
  return (
    <>
    <div>Conditional Rendering Using Ternary Operator</div>
    <div>{x % 2 === 0 ? `${x} is even` : `${x} is odd`}</div>

    </>
  )
}
