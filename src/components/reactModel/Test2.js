//?This is a React Modal Example from importing react-bootstrap modal.
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function Test2() {
    const [show, setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal</Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>Close</Button>
        <Button variant='primary' onClick={handleClose}>Save Changes</Button>
    </Modal.Footer>
    </Modal>
          <Button onClick={handleShow}>Click Me</Button>
    </>
  )
}
