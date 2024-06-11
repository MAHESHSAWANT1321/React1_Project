import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ProductDetail() {
  const [searchParams] =useSearchParams();
  const [params, setParams]=useState({});
  useEffect(()=>{
    const allparams = Object.fromEntries([...searchParams]);
    setParams(allparams);

  },[searchParams])
  return<>
  <h2 className='text-center'>This is a Query Params example</h2>
  <div className='card'>
    <div className='card-body text-center'>
      <h5 className='card-title'>Product Title:-{params.title}</h5>
      <p className='card-price'>Price:-{params.price}</p>
    </div>

  </div>
  </>
}
