import React from 'react'

export default function ListDemo1() {
    const cars = ['Honda', 'tata', 'Maruti', 'Toyota', 'Hundai'];
    return (
        <>
            <h2>ListDemo1</h2>
            {/* <div>{cars[0]}</div>
    <div>{cars[1]}</div>
    <div>{cars[2]}</div>
    <div>{cars[3]}</div>
    <div>{cars[4]}</div> */}

            <h3>Accessing List of array </h3>
            {cars.map((car, ind) => {
                return <div key={ind}>{car}</div>
            })}


            <hr />
            <ol>
                <h3>Accessing Orderd List of array </h3>
                {cars.map((car, ind) => {
                    return <li key={ind}>{car}</li>
                })}
            </ol>

            <hr />
            <ul>
                <h3>Accessing Unorderd List of array </h3>
                {cars.map((car, ind) => {
                    return <li key={ind}>{car}</li>
                })}
            </ul>
            <hr />





        </>
    );
}
