import React, { Component } from 'react'

export default class LifeCycleDemo2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    "id": 10000,
                    "name": "MAHESH ",
                    "username": "SAWANT",
                    "email": "Sawantmahesh@gmail.com",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
            ],
        }
    }
    getUsers = async () => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const finalData = await users.json();
        // this.setState({users:[...this.state.users, ...finalData]})//With initial Data
        this.setState({users:[...finalData]})//Only fethcing dtat

    }
    componentDidMount() {
        console.log('ComponentDidMount Called...');
        this.getUsers();

    }
    render() {
        return <>
            <h1 className='text-center'>User List</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>UserID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Streer</th>
                        <th>Suite</th>
                        <th>pin Code</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((user, ind) => {
                        return <tr key={ind}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.suite}</td>
                            <td>{user.address.zipcode}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    }
}
