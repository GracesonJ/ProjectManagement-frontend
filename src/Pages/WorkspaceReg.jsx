import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { registerOwnerAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function WorkspaceReg() {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const [ownerDetails, setOwnerDetails] = useState({
        companyName: "",
        workspaceName: "",
        workspaceDescription: "",
        industryType: "",
        ownerName: "",
        email: "",
        password: "",
        phone: ""
    })
    console.log(ownerDetails);

    const handleRegister = async () => {
        const { companyName, workspaceName, workspaceDescription, industryType, ownerName, email, password, phone } = ownerDetails
        if (!companyName || !workspaceName || !workspaceDescription || !industryType || !ownerName || !email || !password || !phone) {
            toast.info(`fill the form Completely`)
        } else {
            const result = await registerOwnerAPI(ownerDetails)
            console.log(result);

            if (result.status == 200) {
                toast.success(`Workspace Registraction Successfull`)
                setOwnerDetails({
                    companyName: "",
                    workspaceName: "",
                    workspaceDescription: "",
                    industryType: "",
                    ownerName: "",
                    email: "",
                    password: "",
                    phone: ""
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="" style={{ marginTop: "130px" }}>
                <div className="div">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-5 bg-black shadow rounded-5 p-5">
                                <h1 className='text-white fw-bolder'>100% Team Planning</h1>
                                <p className='text-white mt-3' style={{ textAlign: "justify" }}>There are many ways to manage a single or multiple project. Shape your workflow the way that works for your team - for any project, process, department or customers.
                                    <span className='text-white mt-3 fs-5'> Get Started </span></p>
                                <div className='d-flex justify-content-center'>
                                    <button onClick={handleShow} className='btn btn-dark rounded-5 shadow mt-4'>Get Started </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            hi
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} centered size='lg' >
                <Modal.Header closeButton>
                    <Modal.Title className='fw-bolder'>Create your WorkSpace</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='mt-3'>
                        <h5 className='text-black mb-3 fw-bolder'>Company Details</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Company Name" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, companyName: e.target.value })} type="text" placeholder="XYZ company" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Workspace Name" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, workspaceName: e.target.value })} type="text" placeholder="XYZ" />
                                </FloatingLabel>
                            </div>
                            <div className="col-md-6">

                                <FloatingLabel controlId="floatingInput" label="Workspace Description" className="mb-3">
                                    <textarea onChange={(e) => setOwnerDetails({ ...ownerDetails, workspaceDescription: e.target.value })} type="text" placeholder="" className='form-control' />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Industry Type (e.g., Software, Design)" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, industryType: e.target.value })} type="text" placeholder="Software, Marketing, Design" />
                                </FloatingLabel>
                            </div>
                            <hr />
                            <h5 className='text-black mb-3 fw-bolder'>Create Account</h5>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Owner Name" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, ownerName: e.target.value })} type="text" placeholder="John James" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, email: e.target.value })} type="email" placeholder="example@gmail.com" />
                                </FloatingLabel>

                            </div>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, phone: e.target.value })} type="text" placeholder="7894561230" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                    <Form.Control onChange={(e) => setOwnerDetails({ ...ownerDetails, password: e.target.value })} type="password" placeholder="John Kurian" />
                                </FloatingLabel>
                            </div>
                        </div>

                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        clear
                    </Button>
                    <Link >
                        <Button variant="dark" onClick={handleRegister}>
                            Create
                        </Button>
                    </Link>
                </Modal.Footer>
                <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"

      />
            </Modal>
        </>
    )
}

export default WorkspaceReg