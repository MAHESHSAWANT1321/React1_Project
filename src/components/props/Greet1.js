import React from 'react'

export default function Greet1(name,msg) {
    return (
        <>
            <div>This is a Dynamic data Accessing Using Props</div>
            <div>Here to send props in to child</div>
            <div>Hello {name} {msg}</div>
            {/* <button onClick={f1}> Click me</button> */}
        </>
    )
}
