import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Carrer() {
  return (<>
    <h1 className='text-center'>This is Carrer components</h1>
    <h1 className='text-center'>This is a common for both permanent and Contract jobs.</h1>
    <div>
      <Link to="/carrer/permanent">permanent jobs</Link>&nbps;
      <Link to="/carrer/contract">Contract jobs</Link>
      <Outlet/>
    </div>
  </>
  )
}
