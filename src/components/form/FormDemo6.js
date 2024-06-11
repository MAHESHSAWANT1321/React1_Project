import React, { useState } from 'react'

const initialUser =[ 
    {
    Fname: { value: "mahseh", erroeMsg: 'First name required 5 char' },
    Lname: { value: 'Sawant', erroeMsg: 'First name required 5 char' }
}
];
export default function FormDemo6() {
   
    const [user, setUser]=useState(initialUser);

  return <>
  <h3>Form Demo-6</h3>
      <form>
          <h6>
              First Name:
              <input name='fname' value={user.Fname} onChange={(e) => { setUser({ ...user, Fname: e.target.value }) }}  className='inp1 ms-2' />
          </h6>

          <h6>
              Last Name:
              <input name='lname' value={user.Lname} onChange={(e) => { setUser({ ...user, Lname: e.target.value }) }}  className='inp2 ms-2' />
          </h6>
          
          <input type='reset' className='btn btn-danger ms-2'/>
          <input type='submit' className='btn btn-success ms-2'/>
      </form>

  <p>{user.Fname} {user.Lname}</p>
  
  </>
}
