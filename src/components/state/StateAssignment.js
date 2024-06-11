import React, { useState } from 'react'

export default function StateAssignment() {

  const [flag, setFlag] = useState(true);

  const setFlagState = () => {
    setFlag(!flag);
  } 
  return (
  <>
  {flag ? <h1>This is a Hesding</h1> : null}
  <button onClick={setFlagState}>
    {flag ? 'HIDE' : 'SHOW'}
  </button>

  </>
  )

}

