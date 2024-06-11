import React, { useRef, useState } from 'react'

export default function FormDemo2() {
    const[Fname, setFname]=useState('Ro');
    const[Lname, SetLname]=useState('Sha');

    let myRef1=useRef();
    let myRef2=useRef();


    const submitHandler= (e)=>{
        e.preventDefault();
        console.log(Fname +' '+ Lname);
        console.log(myRef1.current.value +" "+myRef2.current.value);
    }



    return (
    <>
        <div>FormDemo-2 Uncontrolled Input Form</div>
        <form onSubmit={submitHandler} className='text text-center'>
            First Name:
            <input name='Fname' defaultValue={Fname} ref={myRef1}/>

            Last Name:
            <input name='Lname' defaultValue={Lname} ref={myRef2}/>

            <p>First name <strong>{Fname}</strong> and Last name <strong>{Lname}</strong></p>

                <button className='btn btn-success ms-2'>submit</button>

        </form>
           
    </>
    )
}
