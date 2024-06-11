import React, { useState } from "react";

export default function FormDemo1() {
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');

    const changeHandler = (e) => {
        if (e.target.name === 'fname') {
            setFName(e.target.value)
        } else {
            setLName(e.target.value)
        }
    }
    const submitMyForm = (e) => {
        e.preventDefault();
        console.log(Fname, Lname);

    }

    return (
        <>
            <h1 className="text-center">FormDemo-1</h1>
            <form onSubmit={submitMyForm} className="text text-center">
                <h6>
                    First Name:
                    <input name="fname" onChange={changeHandler} className="inp m-2" />
                </h6>

                <h6>
                    Last Name:
                    <input name="lname" onChange={changeHandler} className="inp m-2" />
                </h6>
                {/* <button className="btn btn-success m-2 ">Submit</button> */}
                <input type="reset" value="clear" className="rst bg-danger" />
                <input type="submit" value='login' className="sub m-2 bg-success" />
                <p>First name is: <strong>{Fname}</strong></p>
                <p>Last name is : <strong>{Lname}</strong></p>

            </form>

        </>
    )
}