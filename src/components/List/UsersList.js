import React from 'react'
import users from './users.json'

export default function UsersList() {
    const headings = Object.keys(users[0]).map((key)=><th>{key}</th>);
    console.log(headings);
    return (
        <>
            <h1 className='text-center bg-primary text-white p-3' style={{fontFamily:"sans-serif", fontSize:""}}>UsersList</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        {headings}
                    </tr>
                </thead>

                <tbody>
                    {users.map((user,ind)=>{
                        return (
                        <tr key={ind}>
                            {Object.values(user).map(val=>{
                                return<td>{val}</td>
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
            

        </>
    )
}
