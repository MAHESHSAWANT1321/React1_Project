//?Fetching data on Multiple url at a Time.
import React from 'react'
import axios from 'axios';
import client from './api';

export default function HttpDemo4() {

    const fetchDate = async () => {
        // const Promise1 = axios.get('https://jsonplaceholder.typicode.com/todos');

        // const Promise2 = axios.get('https://jsonplaceholder.typicode.com/users');

        const promise1 = client.get('/users');
        const promise2 = client.get('/comments')

        try {
            const [data1, data2] = await axios.all([promise1, promise2]);
            console.log(data1.data, data2.data);
        } catch (error) {
            console.log('something went wrong...');
            
        }
    }
    return (
    <>
        <h3>Fetching data from multiple URL at a same time.</h3>
        <button onClick={fetchDate} className='btn btn-primary ms-2'>Fetch Data</button>
    </>
    )
}
