import React, { useState } from 'react'

export default function PureCompDemo2() {
    const[name, setName] = useState('MAHESH');
    const changename =() =>{
        setName('MAHESH SAWANT');
    }
  return (
    <>
    {console.log('Render Called...')};
    <h6>Name is: {name}</h6>
    <button onClick={changename} className='btn btn-primary'>Change Name</button>
    </>
  )
}

