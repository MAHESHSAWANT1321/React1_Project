import React, { useState } from 'react'

export default function RemaningCharactor() {
  const [msg, setMessage] = useState('');
  const [Remaning, setRemaning] = useState(100);

  const keyUpHandler = (e) => {
    const msg = e.target.value;
    setMessage(msg);
    setRemaning(100 - msg.length);
  }
  return <>
    <textarea onKeyUp={keyUpHandler} maxLength={100} className='m-1'></textarea>
    <p>Message is:{msg}</p>
    <p>Remaning Characto is:{Remaning}</p>
  </>
}
