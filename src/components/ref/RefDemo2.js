import React, { useEffect, useRef, useState } from 'react'

export default function RefDemo2() {
    const [name, setName] =useState('Rohit');

  const myRef = useRef();
    useEffect(()=>{
        myRef.value = name;

    })
    
  return (<>
    <h1 className='text-center'>RefDemo2</h1>
    <div>
          Current name:- <strong>{name}</strong>, previous name:-<strong>{myRef.value}</strong>
    </div>
    <button onClick={()=>setName('Virat')} className='btn btn-warning m-2'>Change Name</button>


    <button onClick={()=>setName('Bom Bom')} className='btn btn-primary m-2'>Change Previous Name</button>

  </>
  )
}
