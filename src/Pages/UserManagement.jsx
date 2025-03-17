import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddUser from '../Components/AddUser';
import Image from 'react-bootstrap/Image';

function UserManagement() {
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
                <p className='text-dark fw-bolder fs-4 mb-0'>USER MANAGEMENT</p>
                <p className='text-dark'>Manage your team members and their account permissions here.</p>
              </div> <hr className='w-100 text-warning' />
              <div className="d-flex justify-content-around align-items-center">
                <div className='me-auto'><p className='text-white'>All Users</p></div>
                <div className="ms-auto d-flex">
                  <input type="text" className='form-control me-3 ' placeholder='Search Users...' />
                  <div className='mt-2'>
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
                  </div>
                  <button className='btn'> <AddUser /></button>
                </div>
              </div>

              <div className="mt-5">
                <div className='row'>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2  shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                        {/* <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" style={{ width: "50%", height: "50%" }} className='rounded' /> */}
                        <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2 shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                      <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button type='button' className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button type='button' className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2  shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                        {/* <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" style={{ width: "50%", height: "50%" }} className='rounded' /> */}
                        <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2 shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                      <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button type='button' className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button type='button' className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2  shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                        {/* <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" style={{ width: "50%", height: "50%" }} className='rounded' /> */}
                        <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2 shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                      <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button type='button' className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button type='button' className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2  shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                        {/* <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" style={{ width: "50%", height: "50%" }} className='rounded' /> */}
                        <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-md-3'>
                    <Card border="primary" style={{ width: '100%' }} className='mt-2 shadow'>
                      <div className='d-flex justify-content-center mt-3'>
                      <Image style={{ width: "50%", height: "50%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      </div>
                      <p className='text-center mb-0 fw-bolder'>John Philip</p>
                      <p className='text-center mb-1'>Developer</p>
                      <Card.Body className='d-flex justify-content-around mt-0'>
                        <Button type='button' className='me-3' variant="outline-warning" size="lg">Edit User</Button>
                        <Button type='button' className='ms-3' variant="outline-primary" size="lg">View User</Button>
                      </Card.Body>
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

export default UserManagement