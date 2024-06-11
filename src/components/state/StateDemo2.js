import React, { useState } from 'react'

export default function StateDemo2() {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div>Count is:{count}</div>
            <button onClick={increment}>Click Me</button>
        </>
    )
}

