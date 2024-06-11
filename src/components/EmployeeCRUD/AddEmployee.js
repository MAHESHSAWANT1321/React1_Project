import React, { useState } from 'react'

export default function AddEmployee({addEmp}) {

    const [employeeId, setEmployeeId] = useState(0);
    const [employeeName, setEmployeeName] = useState('ABC');
    const [employeeSalary, setEmployeeSalary] = useState(1000);
    const [employeeEmail, setEmployeeEmail] = useState('abc@gmail.com');

    const changeHandler = (e) => {
        if (e.target.name === 'empID') {
            setEmployeeId(e.target.value);
          
        } else if (e.target.name === 'empName') {
            setEmployeeName(e.target.value)
          

        } else if (e.target.name === 'empSalary') {
            setEmployeeSalary(e.target.value);
          

        } else { 
        setEmployeeEmail(e.target.value);
        }
   

    }



    return(<>
        <h4>Add New Employee</h4>
        <div className='border p-2'>


            <div className='m-2'>
                EmpId:

                <input name='empID' placeholder='Enter Employee ID' onChange={changeHandler}/>
            </div>


            <div className='m-2'>
                EmpName:
                <input name='empName' placeholder='Enter Employee Name' onChange={changeHandler} />
            </div>


            <div className='m-2'>
                EmpSalary:
                <input name='empSalary' placeholder='Enter Salary' onChange={changeHandler} />
            </div>


            <div className='m-2'>
                EmpEmail:
                <input name='empEmail' placeholder='Enter Employee Email' onChange={changeHandler} />
            </div>

            <button className='btn btn-success' onClick={()=>{
                let empObj = {
                    EmpID:employeeId,
                    EmpName:employeeName,
                    EmpSalary:employeeSalary,
                    EmpEmail:employeeEmail,

                };
                addEmp(empObj)
                // console.log(empObstartj);
            }}>Add Emp</button>
        </div>


    </>
    )
}
