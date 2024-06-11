//?Form validation while submition.
import React, { useState } from 'react'

export default function FormDemo5() {
    const [Fname, setFname] = useState('Mahesh');
    const [Lname, setLname] = useState('Sawant');
    const [FnameErrorMsg, setFnameErrorMsg] = useState('');
    const [LnameErrorMsg, setLnameErrorMsg] = useState('');
    const [hasError, setHasError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (Fname.length < 5) {
            setFnameErrorMsg('minimum 5 char required');
        }
    };

    const changeHandler = (e) => {
        const inputField1 = e.target.name;
        if (inputField1 === 'fname') {
            setFname(e.target.value)
        }else{
            setLname(e.target.value)
        }
    };
    return (<div>
        <form onSubmit={submitHandler}>
            First Name:
            <input name='fname' value={Fname} onChange={changeHandler} />
            <span className='text-danger'>{FnameErrorMsg}</span>

            Last Name:
            <input name='lname' value={Lname} onChange={changeHandler} />
            <span className='text-danger'>{LnameErrorMsg}</span><br /><br />

            <button disabled={hasError} className='btn btn-success ms-2'>submit</button>
        </form>

    </div>
    )
}
