import React from 'react'

export default function FourceupdateDemo1() {
    let counter = 0;
    /*
    -It is a plain variable.
    -It is not a state or props variable.
    -Thats way we are anble to store updated value inside the counter variable.
    */
    function increment(){
        counter++;
        console.log(counter);
    }
    return (
        <>
            <div>FourceupdateDemo1</div>
            <div>Counter Value is :{counter}</div>
            <button onClick={increment}>Increment</button>
        </>
    )
}
