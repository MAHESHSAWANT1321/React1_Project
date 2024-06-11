import React, { useRef } from 'react'

export default function RefDemo3() {
    const myRef1 = useRef();
    const myRef2 = useRef();
    const addition=()=>{
        console.log(myRef1);
        const num1= +myRef1.current.value;
        const num2= +myRef2.current.value;
        alert(`Addition of ${num1} and ${num2} is ${num1+num2}`);
    };
    return (<>

        <h1 className='text-center'>RefDemo3</h1>
        <h3 className='text-center'>Addition using useref</h3>
        <p>
            Number 1 :<input ref={myRef1}/>
        </p>

        <p>
            Number 2 :<input ref={myRef2}/>
        </p>

        <button onClick={addition} className='btn btn-success m-2'>Add</button>



    </>
    )
}
