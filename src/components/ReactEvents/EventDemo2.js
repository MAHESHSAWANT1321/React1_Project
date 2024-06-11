import React, { useState } from 'react'

export default function EventDemo2() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [sum, setSum] = useState(0);

    // let changeHandeler = (e)=>{
    //     if(e.target.name === 'num1'){
    //         setNum1(e.target.value);
    //     }else{
    //         setNum2(e.target.value);
    //     } 
    // };

    // let changeHandler2 = (e) =>{
    //     setNum2(e.target.value)
    //     console.log(e.target.value);

    // };

    let addition = () => {
        setSum(+num1 + +num2);
        console.log(+num1 + +num2);

    }

    return (
        <>
            <h3 className='text-center'>Addition of Two Numbers</h3>
            <h6>
                Emter Number1:
                <input name='num1' onChange={(e) => setNum1(e.target.value)} />
            </h6>

            <h6>
                Enter Number2:
                <input name='num2' onChange={(e) => setNum2(e.target.value)} />
            </h6>

            <button onClick={addition} className='btn btn-success m-2'>Add</button>
            <h6>
                Addition of {num1} and  {num2} is:- {sum}            
            </h6>
        </>

    )
}
