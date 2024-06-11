//?Conditional Rendering Using Switch case Statements.
import React from 'react'

export default function ConditionalRenderingDemo4() {
    let dayNumber = new Date().getDay();
    console.log(dayNumber);


    switch(dayNumber){
        case 1: 
        return <h3>Today is Monday-{dayNumber}</h3>

        case 2:
            return <h3>Today is Tuesday-{dayNumber}</h3>

        case 3:
            return <h3>Today is Wednesday-{dayNumber}</h3>

        case 4:
            return <h3>Today is Thursday-{dayNumber}</h3>

        case 5:
            return <h3>Today is Friday-{dayNumber}</h3>

        case 6:
            return <h3>Today is Saturday-{dayNumber}</h3>


        case 7:
            return <h3>Today is Sunday-{dayNumber}</h3>

        
        default :
        return <h3> Not a Valid Numbers...</h3>
    }
}
