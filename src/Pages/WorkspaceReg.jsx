import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { registerCompanyAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';

function WorkspaceReg() {
    const navigate = useNavigate()
    
    const [show, setShow] = useState(false);
    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        workspaceName: "",
        workspaceDescription: "",
        industryType: "",
        email: "",
        password: "",

    })
    console.log(companyDetails);

    const handleRegister = async () => {
        const { companyName, workspaceName, workspaceDescription, industryType, email, password } = companyDetails
        if (!companyName || !workspaceName || !workspaceDescription || !industryType || !email || !password) {
            toast.info(`fill the form Completely`)
        } else {
            const result = await registerCompanyAPI(companyDetails)
            console.log(result);

            if (result.status == 200) {
                toast.success(`Workspace Registraction Successfull`)
                setCompanyDetails({
                    companyName: "",
                    workspaceName: "",
                    workspaceDescription: "",
                    industryType: "",
                    email: "",
                    password: "",

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

            <div className="" style={{ marginTop: "150px" }}>
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
                        <p style={{ textAlign: "justify" }} className='p-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde atque facere cumque ipsam at aspernatur sequi minima aperiam non. Nobis velit, incidunt repellat sed porro itaque, odio tenetur modi odit voluptas maiores commodi molestiae minus a provident unde et. Doloribus, quis nam quae commodi laudantium repellat nobis doloremque. Blanditiis quae illum dolore, incidunt esse architecto molestiae ab reiciendis voluptates nisi distinctio, praesentium quibusdam error atque in quam nobis quidem. Sint ratione impedit, temporibus distinctio doloremque corporis veritatis, quas eos, voluptate provident velit exercitationem amet saepe at debitis! Libero esse consectetur ex minima soluta dolorem perspiciatis facilis quasi! Ea quibusdam consequatur cupiditate expedita aperiam minus possimus, placeat blanditiis quos fugit? Doloremque possimus consequuntur hic corrupti vero recusandae quaerat cupiditate magni maxime, sed, provident error voluptates ipsum at a dolores dolore! Quaerat sint dolores distinctio beatae totam perspiciatis consequuntur quo vero molestiae eius similique aliquam nihil earum, unde illum doloribus expedita laborum accusantium ratione aspernatur laboriosam? Tempore illo quasi reiciendis iusto vel officiis error, corporis cumque, delectus hic consequatur optio sint veritatis quidem ratione ut labore? Tempore laboriosam, quo enim odio quae earum pariatur delectus similique? Alias, perspiciatis illo quae aperiam excepturi voluptatum eum dicta? Voluptate aperiam eligendi accusamus debitis dicta optio.</p>
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
                                    <Form.Control onChange={(e) => setCompanyDetails({ ...companyDetails, companyName: e.target.value })} type="text" placeholder="XYZ company" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Workspace Name" className="mb-3">
                                    <Form.Control onChange={(e) => setCompanyDetails({ ...companyDetails, workspaceName: e.target.value })} type="text" placeholder="XYZ" />
                                </FloatingLabel>
                            </div>
                            <div className="col-md-6">

                                <FloatingLabel controlId="floatingInput" label="Workspace Description" className="mb-3">
                                    <textarea onChange={(e) => setCompanyDetails({ ...companyDetails, workspaceDescription: e.target.value })} type="text" placeholder="" className='form-control' />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingInput" label="Industry Type (e.g., Software, Design)" className="mb-3">
                                    <Form.Control onChange={(e) => setCompanyDetails({ ...companyDetails, industryType: e.target.value })} type="text" placeholder="Software, Marketing, Design" />
                                </FloatingLabel>
                            </div>
                            <hr />
                            <h5 className='text-black mb-3 fw-bolder'>Create Account</h5>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                    <Form.Control onChange={(e) => setCompanyDetails({ ...companyDetails, email: e.target.value })} type="email" placeholder="example@gmail.com" />
                                </FloatingLabel>

                            </div>
                            <div className="col-md-6">
                                <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                    <Form.Control onChange={(e) => setCompanyDetails({ ...companyDetails, password: e.target.value })} type="password" placeholder="John Kurian" />
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