import React, { useState, useEffect } from 'react';
import { Modal, Button, FloatingLabel, Form, Dropdown } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { addProjectAPI, getManagerListAPI } from '../services/allApi';

function AddProject() {
    const [show, setShow] = useState(false);
    const [token, setToken] = useState("");
    const [managerList, setManagerList] = useState([])
    const [projectData, setProjectData] = useState({
        projectName: '',
        clientCompany: '',
        clientName: '',
        clientEmail: '',
        deadline: '',
        description: '',
        manager: null
    });
    console.log(projectData);

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prev => ({ ...prev, [name]: value }));
    };

    const handleManagerSelect = (manager) => {
        setProjectData(prev => ({
            ...prev,
            manager: {
                id: manager.id,
                name: manager.name,
                email: manager.email
            }
        }));
    };

    const handleClose = () => {
        setShow(false);
        setProjectData({
            projectName: '',
            clientCompany: '',
            clientName: '',
            clientEmail: '',
            deadline: '',
            description: '',
            manager: null
        });
    };


    const getManagerList = async () => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            console.log(token);

            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
            const result = await getManagerListAPI(reqHeader)
            console.log(result);
            // setManagerList(result.data)
        }
    }
    useEffect(() => {
        getManagerList()
    }, [show])
    console.log(managerList);
    
    


    const handleAddProject = async () => {
        const { projectName, clientCompany, clientName, clientEmail, deadline, description, manager } = projectData;

        if (!projectName || !clientCompany || !clientName || !clientEmail || !deadline || !description || !manager) {
            toast.warning("Please fill the form completely");
            return;
        }

        const reqBody = new FormData();
        reqBody.append("projectName", projectName);
        reqBody.append("clientCompany", clientCompany);
        reqBody.append("clientName", clientName);
        reqBody.append("clientEmail", clientEmail);
        reqBody.append("deadline", deadline);
        reqBody.append("description", description);
        reqBody.append("managerId", manager.id);
        reqBody.append("managerName", manager.name);
        reqBody.append("managerEmail", manager.email);

        if (token) {
            const reqHeader = {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            };

            try {
                const result = await addProjectAPI(reqBody, reqHeader);
                if (result.status == 200) {
                    toast.success("Project added successfully");
                    setTimeout(() => {
                        handleClose();
                    }, 2000);
                } else if (result.status == 406) {
                    toast.warning(result.response.data);
                } else {
                    toast.error("Something went wrong");
                }
            } catch (error) {
                toast.error("Error adding project");
                console.error(error);
            }
        } else {
            toast.error("Please login to add projects");
        }
    };

    return (
        <>
            <Button variant="dark" onClick={() => setShow(true)} style={{ width: "130px" }}>
                + Add Project
            </Button>

            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <FloatingLabel controlId="projectName" label="Project Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="projectName"
                                    value={projectData.projectName}
                                    onChange={handleInputChange}
                                    placeholder="Employee Management"
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="clientCompany" label="Client Company" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="clientCompany"
                                    value={projectData.clientCompany}
                                    onChange={handleInputChange}
                                    placeholder="Tech Solutions Inc."
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="clientName" label="Client Name" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="clientName"
                                    value={projectData.clientName}
                                    onChange={handleInputChange}
                                    placeholder="John Smith"
                                    required
                                />
                            </FloatingLabel>
                        </div>

                        <div className="col-md-6">
                            <FloatingLabel controlId="clientEmail" label="Client Email" className="mb-3">
                                <Form.Control
                                    type="email"
                                    name="clientEmail"
                                    value={projectData.clientEmail}
                                    onChange={handleInputChange}
                                    placeholder="client@example.com"
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel controlId="deadline" label="Deadline" className="mb-3">
                                <Form.Control
                                    type="date"
                                    name="deadline"
                                    value={projectData.deadline}
                                    onChange={handleInputChange}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </FloatingLabel>

                            <div className="mb-3">
                                <label className="form-label">Project Manager *</label>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-secondary"
                                        className="w-100 text-start d-flex align-items-center justify-content-between"
                                        id="manager-dropdown"
                                    >

                                        <>
                                            <span>Graceson J</span>
                                            <small className="text-muted ms-2">Gracesonj@gmail.com</small>
                                        </>

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="w-100">

                                        <Dropdown.Item
                                            className="d-flex justify-content-between">
                                            <span>Graceson Jjjjjj</span>
                                            <small className="text-muted">Gracesonjjjjjjjjjjjj@gmail.com</small>
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="col-12">
                            <FloatingLabel controlId="description" label="Project Description">
                                <Form.Control
                                    as="textarea"
                                    name="description"
                                    value={projectData.description}
                                    onChange={handleInputChange}
                                    placeholder="Describe the project..."
                                    style={{ height: '100px' }}
                                    required
                                />
                            </FloatingLabel>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="dark"
                        onClick={handleAddProject}
                        disabled={!projectData.manager || !projectData.projectName}
                    >
                        Create Project
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProject;