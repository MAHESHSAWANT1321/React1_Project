import React from 'react'

export default function RefDemo4() {
    let myRef1;
    let myRef2;

    const addition=()=>{
        const num1 = +myRef1.value;
        const num2 = +myRef2.value;
        alert(`Addition of ${num1} and ${num2} is ${num1 + num2}`);
    }

  return (
    <>
    <h1 className='text-center'>RefDemo-4 using callback Ref</h1>
    <p>
        Number 1 : <input ref={inputBox=>{myRef1=inputBox}}/>
    </p>

    <p>
        Number 2 : <input ref={inputBox=>{myRef2=inputBox}}/>
    </p>

    <button onClick={addition} className='btn btn-primary m-2'>Add</button>

      </>
  )
}
