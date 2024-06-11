//?Conditional Reandering Using if..else


import React from 'react'
export default function ConditionalRenderingDemo2() {
    // const num = 4;
    let num = prompt('Enter a numbers')
    if(num%2 === 0){
        return <div>{num} is Even</div>
    }else{
        return<div>{num} is Odd</div>
    }
}
