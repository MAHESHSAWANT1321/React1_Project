//?This example for Form Validation while typeing
import React, { useState } from 'react'

export default function FormDemo4() {
    const [Fname, setFname] = useState('Mahesh');
    const [Lname, setLname] = useState('Sawant');
    const [FnameErrorMsg, setFnameErrorMsg] = useState('');
    const [LnameErrorMsg, setLnameErrorMsg] = useState('');
    const [hasError, setHasError] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        alert(Fname + " " + Lname)
    };



    const changeHandler = (e) => {

        const inputField = e.target.name;

        if (inputField === 'fname') {
            setFname(e.target.value)

            if (!e.target.value) {
                setFnameErrorMsg('First name should not be empty...')
                setHasError(true);

            } else if (e.target.value.length < 5) {
                setFnameErrorMsg('First name should atllest 5 Charactor...')
                setHasError(true);

            } else {
                setFnameErrorMsg('');
                setHasError(false)

            }

        } else if (inputField === 'lname') {
            setLname(e.target.value);

            if (!e.target.value) {
                setLnameErrorMsg('Last name should not be empty...');
                setHasError(true);


            } else if (e.target.value.length < 5) {
                setLnameErrorMsg('Last name shoul atllest 5 Charactor...')
                setHasError(true);


            } else {
                setLnameErrorMsg('');
                setHasError(false)
            }


        } else {
            alert(Fname + " " + Lname)
        }
    };


    return (
        <form onSubmit={submitHandler}>
            First Name:
            <input name='fname' value={Fname} onChange={changeHandler} />
            <span class='text-danger'>{FnameErrorMsg}</span>
            Last Name:
            <input name='lname' value={Lname} onChange={changeHandler} />
            <span class='text-danger'>{LnameErrorMsg}</span><br /><br />
            <button disabled={hasError} className='btn btn-success ms-2'  >submit</button>
        </form>
    )
}
