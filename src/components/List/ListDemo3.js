
//!Example:-To pring array of object using map method.
import React from 'react';

function ListDemo3() {
    let EmpDetails = [
        {
            empId: 1,
            Name: 'Mahesh Sawant',
            age: 28,
            salary: 60000,
        },

        {
            empId: 2,
            Name: 'Narendra Pawar',
            age: 27,
            salary: 70000,

        },

        {
            empId: 3,
            Name: 'Saurabh Kakde',
            age: 26,
            salary: 80000,

        },

        {
            empId: 4,
            Name: 'Lokesh Dore',
            age: 22,
            salary: 90000

        }
    ];

    return (
        <>
            <h1 className='text-center bg-info bg-gradient p-3' style={{fontFamily:'sans-serif'}}> Employee Table</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>Emp Name</th>
                        <th>Emp Age</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {EmpDetails.map((emp, ind) => {
                        return <tr key={ind}>
                            <td>{emp.empId}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default ListDemo3