import React, { useState } from 'react'
import MemoDemo2 from './MemoDemo2'

export default function MemoDemo1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('MAHESH');

  const changeCount = () => {
    setCount(count + 1)
  };

  const changename = () => {
    setName('SAWANT')
  };
  return (
    <>
      <h4>MemoDemo1 - is a Prent Component</h4>

      <button onClick={changeCount} className='btn btn-success  m-2'><h5>Increment</h5></button>
      <h6>Updated Count is: {count}</h6>

      <button onClick={changename} className='btn btn-primary  m-2'><h5>Change Name</h5></button>
      <h6>Updated Name is: {name}</h6>

      <MemoDemo2 name={name} />
    </>
  )
}
