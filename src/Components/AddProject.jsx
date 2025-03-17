import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddProject() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <button className='btn btn-dark' onClick={handleShow} style={{ width: "130px" }} >
                + Add Project
            </button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <div className="row">
                            <div className=''>
                                <FloatingLabel controlId="floatingInput" label="Project Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Employee Management" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Company Name" className="mb-3">
                                    <Form.Control type="text" placeholder="Luminar Technolab" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Client Name" className="mb-3">
                                    <Form.Control type="text" placeholder="John Luther" />
                                </FloatingLabel>
                            </div>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Company Email" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Company address" className="mb-3">
                                    <textarea type="text" placeholder="No.10 South kerala" className='form-control' />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Deadline" className="mb-3">
                                    <Form.Control type="date" placeholder="28/08/2028" />
                                </FloatingLabel>
                            </div>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Project Description" className="mb-3">
                                    <textarea type="text" placeholder="No.10 South kerala" className='form-control' />
                                </FloatingLabel>

                                <div className='d-flex justify-content-around align-items-center'>
                                    <label htmlFor="" className='me-auto'>
                                        <p>Manager :</p>
                                    </label>
                                    <DropdownButton id="dropdown-basic-button" title="Assigned Manager">
                                        <Dropdown.Item href="#/action-1">Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Name</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Name</Dropdown.Item>
                                    </DropdownButton>
                                </div>

                                <div className='d-flex justify-content-around align-items-center mt-3'>
                                    <label htmlFor="" className='me-auto'>
                                        <p>Priority (Optional) :</p>
                                    </label>
                                    <DropdownButton id="dropdown-basic-button" title="Priority Level">
                                        <Dropdown.Item href="#/action-1">Critical</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">High</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Medium</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Low</Dropdown.Item>
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
                        Add Project
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default AddProject