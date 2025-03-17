import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function AddTask() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <button className='btn btn-dark' onClick={handleShow} style={{ width: "130px" }} >
                + Add Task
            </button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder'>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className=''>
                                    <FloatingLabel controlId="floatingInput" label="Task Name" className="mb-3">
                                        <Form.Control type="text" placeholder="Employee Management" />
                                    </FloatingLabel>
                                </div>
                                <FloatingLabel controlId="floatingInput" label="Task Description" className="mb-3">
                                    <textarea type="text" placeholder="No.10 South kerala" className='form-control' />
                                </FloatingLabel>
                                <div className='mt-3'>
                                    <FloatingLabel controlId="floatingInput" label="Deadline" className="mb-3">
                                        <Form.Control type="date" placeholder="28/08/2028" />
                                    </FloatingLabel>
                                </div >
                            </div>
                            <div className="col-md-6">
                                <div className='d-flex justify-content-around align-items-center'>
                                    <label htmlFor="" className='me-auto'>
                                        <p>Project :</p>
                                    </label>
                                    <DropdownButton id="dropdown-basic-button" title="Project">
                                        <Dropdown.Item href="#/action-1">Project Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Project Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Project Name</Dropdown.Item>
                                    </DropdownButton>
                                </div>

                                <div className='d-flex justify-content-around align-items-center mt-3'>
                                    <label htmlFor="" className='me-auto'>
                                        <p>Resource :</p>
                                    </label>
                                    <DropdownButton id="dropdown-basic-button" title="Choose Member">
                                        <Dropdown.Item href="#/action-1">Member Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Member Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Member Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Member Name</Dropdown.Item>
                                    </DropdownButton>
                                </div>



                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        Add Task
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AddTask