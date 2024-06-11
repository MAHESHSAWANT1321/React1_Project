
//?This example for form data as a Object.
import React, { useState } from 'react'

export default function FormDemo3() {
    const [user, setUser] =useState({Fname:'Rohit', Lname:'Sharma'});
  return (<div className='text text-center'>
    <h1>FormDemo4</h1>
    <form>
        <h6>
            First Name:
            <input onChange={(e)=>{setUser({...user, Fname:e.target.value})}} name='fname' value={user.Fname} className='inp1 ms-2'/>
        </h6>

        <h6>
            Last Name:
            <input onChange={(e)=>{setUser({...user, Lname:e.target.value})}} name='lname' value={user.Lname} className='inp2 ms-2'/>
        </h6>

        <button className='btn btn-success ms-2'>submit</button>
        <p>{user.Fname} {user.Lname}</p>

    </form>
  </div>
  )
} 
