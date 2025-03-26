import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, FloatingLabel, Form, Image } from 'react-bootstrap';
import { registerUserAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import { addResponseContext } from '../context/ContextShare';

function AddUser() {
    const [show, setShow] = useState(false);
    const [preview, setPreview] = useState("");
    const [key, setKey] = useState(1);
    const { setAddResponse } = useContext(addResponseContext);

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        department: "",
        designation: "",
        dateOfBirth: "",
        companyId: ""
    });

    const handleShow = () => setShow(true);

    const handleRegister = async () => {
        const { name, email, password, department, designation, companyId } = userDetails;

        if (!name || !email || !password || !department || !designation || !companyId) {
            toast.info('Please fill in all required fields', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
            return;
        }

        try {
            const result = await registerUserAPI(userDetails);
            console.log(result);
            

            if (result?.status === 200) {
                toast.success('User created successfully!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });

                setAddResponse(result.data);
                setTimeout(() => {
                    handleClose();
                }, 2000);
            } else {
                const errorMessage = result?.response?.data?.message ||
                    result?.data?.message ||
                    "Registration failed";
                toast.warning(errorMessage, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.error("Registration error:", error);

            let errorMessage = "Something went wrong";
            if (error.code === "ERR_NETWORK" || error.message.includes("CONNECTION_REFUSED")) {
                errorMessage = "Cannot connect to server. Please try again later.";
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }

            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    const handleClose = () => {
        handleCancel();
        setShow(false);
    };

    const handleCancel = () => {
        setUserDetails({
            name: "",
            email: "",
            password: "",
            phone: "",
            department: "",
            designation: "",
            dateOfBirth: "",
            companyId: ""
        });
        setPreview("");
        setKey(prev => prev === 1 ? 0 : 1);
    };

    useEffect(() => {
        const company = JSON.parse(sessionStorage.getItem("existingUser"));
        if (company?._id) {
            setUserDetails(prev => ({
                ...prev,
                companyId: company._id
            }));
        }
    }, [show]);

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
                            <div className="col-md-12 mt-3">
                                <form>
                                    <FloatingLabel label="Name" className="mb-3">
                                        <Form.Control
                                            value={userDetails.name}
                                            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                            type="text"
                                            placeholder="John David"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel label="Phone Number (Optional)" className="mb-3">
                                        <Form.Control
                                            value={userDetails.phone}
                                            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                            type="text"
                                            placeholder="7894561230"
                                        />
                                    </FloatingLabel>

                                    <div className='d-md-flex'>
                                        <Form.Select
                                            onChange={(e) => setUserDetails({ ...userDetails, department: e.target.value })}
                                            title="Department"
                                            className='me-2 mt-3'
                                            value={userDetails.department}
                                        >
                                            <option value="" hidden>Department</option>
                                            <option value="management">Management</option>
                                            <option value="development">Development</option>
                                            <option value="testing">Testing</option>
                                            <option value="design">Design</option>
                                            <option value="sales">Sales</option>
                                        </Form.Select>
                                        <Form.Select
                                            value={userDetails.designation}
                                            onChange={(e) => setUserDetails({ ...userDetails, designation: e.target.value })}
                                            title="Designation"
                                            className='mt-3'
                                        >
                                            <option value="" hidden>Designation</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Tester">Tester</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Sales Executive">Sales Executive</option>
                                        </Form.Select>
                                    </div>

                                    <div className="col-md-12">
                                        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
                                            <Form.Control
                                                value={userDetails.email}
                                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                                type="email"
                                                placeholder="name@example.com"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-md-12">
                                        <FloatingLabel controlId="floatingPassword" label="Password">
                                            <Form.Control
                                                value={userDetails.password}
                                                onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                                                type="password"
                                                placeholder="Password"
                                            />
                                        </FloatingLabel>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCancel}>
                        Clear
                    </Button>
                    <Button variant="dark" onClick={handleRegister}>
                        Add User
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}

export default AddUser;