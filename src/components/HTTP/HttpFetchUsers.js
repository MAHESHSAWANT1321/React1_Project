import React, { useEffect, useState } from 'react'

export default function HttpFetchUsers() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const userData = await fetch('https://fakestoreapi.com/products');
        const finalUserData = await userData.json();
        setUsers(finalUserData);
    };

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h1>Http Fetch Users</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.title}</li>
                ))}
            </ul>
        </div>
    )
}


