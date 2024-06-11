import React from 'react'

export default function EventDemo3() {

    const f1 = () => {
        console.log('f1....');
    }

    const f2 = () => {
        console.log('f2...');
    }

    const f3 = () => {
        console.log('f3...');
    }
    return (
        <>
        {/* Below code for the Cpturing phase Top-to-Botome */}
        <h6>Capturing Phase</h6>
            <div className='border' onClickCapture={f1}>
                Div-1
                <div className='border' onClickCapture={f2}>
                    Div-2
                    <div className='border' onClickCapture={f3}>
                        Div-3</div>
                </div>
            </div>
<hr/>
            {/* Below code for the event Bubbling phase-Botome to Top */}
            <h6>Bubbling Phase</h6>

            <div className='border' onClick={f1}>
                Div-1
                <div className='border' onClick={f2}>
                    Div-2
                    <div className='border' onClick={f3}>
                        Div-3
                    </div>
                </div>
            </div>
        </>
    )
}
