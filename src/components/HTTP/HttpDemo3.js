import React, { useEffect, useState} from 'react'
import axios from 'axios';

export default function HttpDemo3() {
    const [users, setUsers] =useState([]);

    const fetchUsers = async()=>{
      const url ='https://jsonplaceholder.typicode.com/users';
      // const url ='https://jsonplaceholder.typicode.com/use'; //This is for Intercepter2 -->Wrowng url
      const response = await axios.get(url);
      // setUsers(response.data);//This is corected code for Intercepter2.
      setUsers(response);//This is corected code for Intercepter3.
    };

  useEffect(() => {
    fetchUsers();
  },[])
  return (
    <>
      <h2 className='text-center'>User List using AXIOS</h2>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>
        })}
      </ul>

    </>
  )
}