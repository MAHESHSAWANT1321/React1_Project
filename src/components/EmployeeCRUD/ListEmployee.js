import React from 'react'

export default function ListEmployee({ employees, deleteEmp }) {
    return <>
        <h4 className='text-center'>Employee Table</h4>
        <table className='table table-bordered table striped'>
            <thead>
                <tr>
                    <th>EmpID</th>
                    <th>EmpName</th>
                    <th>EmpSalary</th>
                    <th>EmpEmail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((empValue, empIndex) => {
                    return (
                        <tr key={empIndex}>
                            <td>{empValue.EmpID}</td>
                            <td>{empValue.EmpName}</td>
                            <td>{empValue.EmpSalary}</td>
                            <td>{empValue.EmpEmail}</td>
                            <td>
                                <button onClick={() => deleteEmp(empValue.EmpID)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>

    </>

}
