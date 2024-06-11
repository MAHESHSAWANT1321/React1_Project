
//?Fetching data from axios with url.
import React, { useEffect, useState } from 'react'
import client from './api'

export default function HttpDemo2() {
    const [users,setUser]=useState([]);
    const fetchUsers =async ()=>{
        const response = await client.get('/users')
        setUser(response.data);

        // const comments = await client.get('/comments');
        // console.log(comments);
    };

    

    useEffect(()=>{
        fetchUsers()
    })
  return (
  <>
  <h2 className='text-center'>User List using AXIOS</h2>
  <ul>
    {users.map((user, index)=>{
       return <li key={index}>{user.name}</li>
    })}
  </ul>
  
  </>
  )
}
