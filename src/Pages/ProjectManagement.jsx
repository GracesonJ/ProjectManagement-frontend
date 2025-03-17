import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import AddProject from '../Components/AddProject';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProjectManagement() {
  return (
    <>

      <div className="container-fluid mt-5 px-4">
        <div className="row pt-5">
          <div className="col-md-3 mt-5">
            <Sidebar />
          </div>
          <div className="col-md-9 shadow rounded rounded-4 p-1 mt-5">
            <div className='p-3'>
              <div className=''>
                <p className='text-dark fw-bolder fs-4 mb-0'>PROJECT MANAGEMENT</p>
                <p className='text-dark'>Manage your Project and assign members here.</p>
              </div> <hr className='w-100 text-warning' />
              <div className="d-flex justify-content-around align-items-center">
                <div className='me-auto'><p className='text-white'>All Users</p></div>
                <div className="ms-auto d-flex">
                  <input type="text" className='form-control me-3 ' placeholder='Search Project...' />
                  {/* <div className='mt-2'>
                    <Dropdown className='me-3'>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-dark'>
                        Filter
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Managers</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Developers</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Testers</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div> */}
                  <button className='btn'> <AddProject /></button>
                </div>
              </div>

              <div className="mt-4">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  <div className="col-md-4 mb-3">
                    <Card  style={{ width: '100%' }} className="mb-2">
                      <Card.Body>
                      <div className='text-center d-flex justify-content-around align-items-center mt-2'>
                        <p className='fw-bolder fs-5 me-auto'>Project Name</p>
                        <p className='text-success'>Active</p>
                      </div>
                        <p>By : <span className='fw-bold'>Tech Mahindra</span></p>
                        <ProgressBar variant="dark" animated now={65}/>
                      </Card.Body> 
                      <Card.Footer>
                     <div className='d-flex justify-content-around align-items-center'>
                       <p>Status: <span className='text-success'>Active</span></p>
                       <p>Deadline: <span className='text-success'>March 30, 2025</span></p>
                       </div>
                      </Card.Footer>
                    </Card>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProjectManagement