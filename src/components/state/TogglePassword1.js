import React, { useState } from 'react'

export default function TogglePassword1() {
    const [flag, setFlag] = useState(true);
    const togglePasword = () =>{
        setFlag(!flag)
    }
    return <>
        <input type={flag ? 'Password' : 'text'} />
        <button onClick={togglePasword}>
            {!flag ? 'Hide Password' : 'Show Password'}
        </button>
    </>
}
