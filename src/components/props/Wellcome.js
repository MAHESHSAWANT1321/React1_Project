
//?This example for prop.Children Consept.
import React from 'react'

export default function Wellcome(props) {
    return (
        <>
            <h3>This is a WellCome component</h3>
            <h3>This is a Static Text</h3>
            <h3>{props.children}</h3>
        </>
    )
}