import React, { useState } from 'react'
import ListEmployee from './ListEmployee'
import AddEmployee from './AddEmployee'

export default function EmployeeCRUD() {
    //We will having Array of Employees
    const initialEmployees = [
        { EmpID: 101, EmpName: 'Mahesh Sawant', EmpSalary: 60000, EmpEmail: 'ms@gmail.com' },
        { EmpID: 102, EmpName: 'Saurabh Kakde', EmpSalary: 70000, EmpEmail: 'sk@gmail.com' },
        { EmpID: 103, EmpName: 'Narendra Pawar', EmpSalary: 80000, EmpEmail: 'np@gamil.com' },
        { EmpID: 104, EmpName: 'Lokesh Dhore', EmpSalary: 90000, EmpEmail: 'ld@gmail.com' },
    ];
    const [employees, setEmployees] = useState(initialEmployees);

    const deleteEmp = (empIdDelete) => {
        const tempArray = employees.filter((emp) => {
            return emp.EmpID !== empIdDelete;
        });
        setEmployees(tempArray);
    };

    const addEmp = (empObj) => {
        let addtempArray = [...employees, empObj];
        setEmployees(addtempArray);
    }
    return <>
        <h1 className='text-center bg-warning  p-2'> This is a Employee CRUD Exaple</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-8'>
                    <ListEmployee employees={employees} deleteEmp={deleteEmp} />
                </div>
                <div className='col-sm-4'>
                    <AddEmployee addEmp={addEmp}/>
                </div>
            </div>
        </div>

    </>
}
