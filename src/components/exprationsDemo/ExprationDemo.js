import React from 'react'

export default function ExprationDemo () {
    let a =5;
    let b = 4;
    let user={
        firstName:'Mahesh',
        lastName:'Sawant',
        age:28
        
    }

    function fullname(user){
      return user.firstName + " " + user.lastName;
    }
    
  return (
    <>
    <div> ExprationDemo Components </div>
    <div>Latest version of React is {React.version}</div>
    <div>Addition of {a} and {b} is : {a+b}</div>
    <div> Hello {user.firstName} {user.lastName} you are {user.age} years old.</div>
    <div>your full name is {fullname(user)}</div>
      </>
  )
}
