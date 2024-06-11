
import React, { useEffect, useRef, useState } from 'react'

export default function RefDemo1() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const myRef = useRef();
    useEffect(() => {
        myRef.value = count;
        console.log('useEffect called...');
    });

    return (<>
        {console.log('Render called...')}
        <h1 className='text-center'>RefDemo1</h1>
        <h3>Count is:- {count}, before count is:-{myRef.value}</h3>
        <button onClick={increment} className='btn btn-primary m-2'>Increment</button>
    </>

    )
}
