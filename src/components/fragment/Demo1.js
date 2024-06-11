import React from 'react'
import Demo2 from './Demo2'

export default function Demo1() {
    return (
        <React.Fragment>
            <div> Is a Demo1 Components</div>
            <Demo2 />
        </React.Fragment>
        /*
        ?In this way increase the size of DOM because we have a no of component wrap in a anothe component we can not use <div> in multiple time. we can use React.fragment.and freagment is not shoing on browser also.
        */
        // <div>
        //       <div> Is a Demo1 Components</div>
        //       <Demo2 />
        // </div>
    )
}
