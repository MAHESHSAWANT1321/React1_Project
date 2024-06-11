import React, { useEffect, useState } from 'react'

export default function LifeCycleDemo4() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);

    useEffect(() => {
        console.log('use Effect called...');
        //?mounting & change(Updateing) in a/c this logic will be called.
        return()=>{
            //?This logic only for component will unmount.
            console.log('component will unmount...');
        }
    }, [a, b]);


    return (<>
        <h3 className='text-center'>LifeCycleDemo-4</h3>

        <div> Initial value of A is:-{a}</div>
        <button onClick={() => setA(15)} className='btn btn-primary m-2'>Update A</button>


        <div> Initial value of B is:-{b}</div>
        <button onClick={() => setB(25)} className='btn btn-success m-2'>Update B</button>


        <div> Initial value of C is:-{c}</div>
        <button onClick={() => setC(35)} className='btn btn-warning m-2'>Update C</button>

    </>
    );
}
