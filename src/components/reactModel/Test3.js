//?This is a Model using react-bootstrap in Two model>
import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import ModalTitle from 'react-bootstrap/esm/ModalTitle';
import Modal from 'react-bootstrap/Modal';

export default function Test3() {

    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    function openModal1() {
        setFlag1(true)
    }

    function closeModal1() {
        setFlag1(false)

    }

    function openModal2() {
        setFlag2(true)
    }

    const closeModal2 = () => {
        setFlag2(false)
    }
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
            <Button className='m-1' onClick={openModal1}>Table inside model</Button>

            <Button className='m-1' onClick={openModal2}> From inside Model</Button>

            <Modal show={flag1} onHide={closeModal1}>
                <Modal.Header closeButton>
                    <ModalTitle>Employee Information</ModalTitle>
                </Modal.Header>

                <Modal.Body>
                    <table className='table table-bordered table-striped'>
                        <tr>
                            <th>EmpID</th>
                            <th>Emp Name</th>
                            <th>Emp Age</th>
                            <th>Salary</th>
                        </tr>


                        {EmpDetails.map((emp, ind) => {
                            return <tr key={ind}>
                                <td>{emp.empId}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.age}</td>
                                <td>{emp.salary}</td>
                            </tr>
                        })}
                    </table>
                </Modal.Body>

                <Modal.Footer >
                    <h6>This is the Personal Information of etch Employee.<div>Don't Share anyone...!</div></h6>
                    <Button variant='danger' onClick={closeModal1}>Close Modal1</Button>
                </Modal.Footer>

            </Modal>

            <hr />

            <Modal show={flag2} onHide={closeModal2}>
                <Modal.Header closeButton>
                    <ModalTitle>Form Validation</ModalTitle>
                </Modal.Header>

                <Modal.Body>
                    <form>


                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>


                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>


                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>


                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <h6>Trust me i never disclose your data to anyOne...!</h6>
                    <Button variant='danger' onClick={closeModal2}>Close Modal2</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}
