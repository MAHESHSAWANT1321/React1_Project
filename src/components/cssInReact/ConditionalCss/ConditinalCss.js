import React from 'react'


export default function ConditinalCss() {
    // let num = +prompt('Enter a number...');//Taking use input
    let num = 4;
    let style1 = { color: 'red' };
    let style2 = { color: 'blue' };
    return (
        <>
            <div style={num % 2 === 0 ? style1 : style2}> Number {num} is {num % 2 === 0 ? 'even' : 'odd'}</div>

            <button className={`btn btn-lg ${num % 2 === 0 ? "btn-success" : "btn-danger"}`}>
                add a class dynamically
            </button>

        </>
    )
}
