import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRegister = async () => {
            const { name, email, password, phone, department, designation, profileImage, dateOfBirth } = ownerDetails
            if (!name || !email || !password || !phone || !department || !designation || !profileImage || !dateOfBirth) {
                toast.info(`fill the form Completely`)
            } else {
                const result = await registerOwnerAPI(ownerDetails)
                console.log(result);
    
                if (result.status == 200) {
                    toast.success(`User created Successfull`)
    
                    setOwnerDetails({
                        name: "",
                        email: "",
                        password: "",
                        phone: "",
                        department: "",
                        designation: "",
                        profileImage: "",
                        phdateOfBirthone: ""
                    })
                    navigate("/login")
    
                } else if (result.status == 406) {
                    toast.warning(result.response.status)
                }
                else {
                    toast.error(`Something went wrong`)
                }
            }
        }
        
    return (
        <>

            <Button variant="dark" onClick={handleShow} style={{ width: "100px" }}>
                + Add User
            </Button>
            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="p-3">
                        <div className="row">
                            <div className="col-md-4 shadow rounded rounded-4" >
                                <label className='d-flex justify-content-around align-items-center'>
                                    <input type="file" style={{ display: "none" }} />
                                    <img className='img-fluid' src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
                                </label>
                            </div>
                            <div className="col-md-8 mt-3">
                                <form>
                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                        <Form.Control type="text" placeholder="John David" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingInput" label="Phone Number (Optional)" className="mb-3">
                                        <Form.Control type="text" placeholder="John David" />
                                    </FloatingLabel>
                                    <div className='d-flex justify-content-around align-items-center mt-3'>

                                    <DropdownButton id="dropdown-item-button" title="Department">
                                        <Dropdown.Item as="button">Management</Dropdown.Item>
                                        <Dropdown.Item as="button">Development</Dropdown.Item>
                                        <Dropdown.Item as="button">Testing</Dropdown.Item>
                                        <Dropdown.Item as="button">Design</Dropdown.Item>
                                        <Dropdown.Item as="button">Sales</Dropdown.Item>
                                    </DropdownButton>
                                    <DropdownButton id="dropdown-item-button" title="Designation">
                                        <Dropdown.Item as="button">Manager</Dropdown.Item>
                                        <Dropdown.Item as="button">Developer</Dropdown.Item>
                                        <Dropdown.Item as="button">Tester</Dropdown.Item>
                                        <Dropdown.Item as="button">Designer</Dropdown.Item>
                                        <Dropdown.Item as="button">Sales Executive</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                

                                {/* <div className='mt-4'>
                                    <FloatingLabel controlId="floatingInput" label="Date Of Birth" className="mb-3">
                                        <Form.Control type="date" placeholder="28/08/2028" />
                                    </FloatingLabel>
                                </div> */}

                            </div>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                            </div>

                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Clear
                    </Button>
                    <Button variant="dark" onClick={handleRegister}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddUser