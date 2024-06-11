import React from 'react'
import Swal from 'sweetalert2';

export default function SweetAlertDemo1() {

    const alertDemo1 = () => {
        alert('Hello');
    };
    const alertDemo2 = () => {
        Swal.fire('Good Job..!', 'You clicked the button..!', 'success')
    };

    const alertDemo3 = () => {
        Swal.fire({
            title: "Sweet!",
            text: "Modal with a custom image.",
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 500,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    };

    const alertDemo4 = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Apply',
            denyButtonText: `Not Interested`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //API Call
                alert('User confirmed...!')
            } else if (result.isDenied) {
                alert('User Denied...!')
            }
        });
    };

    return (
        <>
            <div>Sweet Alert Demo1</div>
            <button onClick={alertDemo1}>Js Alert</button>
            <button onClick={alertDemo2} className='ms-1'>Sweet Alert1</button>
            <button onClick={alertDemo3} className='ms-1'>Sweet Alert2</button>
            <button onClick={alertDemo4} className='ms-1'>Sweet Alert3</button>
        </>
    )
}
