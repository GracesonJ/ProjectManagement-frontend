import React from 'react'
import Sidebar from '../Components/Sidebar'
import Dropdown from 'react-bootstrap/Dropdown';
import AddTask from '../Components/AddTask';
import Image from 'react-bootstrap/Image';

function TaskManagement() {
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
                <p className='text-dark fw-bolder fs-4 mb-0'>TASK MANAGEMENT</p>
                <p className='text-dark'>Assign tasks for the Team Members here.</p>
              </div> <hr className='w-100 text-warning' />
              <div className="d-flex justify-content-around align-items-center">
                <div className='me-auto'><p className='text-white'>All Users</p></div>
                <div className="ms-auto d-flex">
                  <input type="text" className='form-control me-3 ' placeholder='Search Project...' />
                  <div className='mt-2'>
                    <Dropdown className='me-3'>
                      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-dark'>
                        Filter
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" className='text-success'>Completed</Dropdown.Item>
                        <Dropdown.Item href="#/action-2" className='text-primary'>On Progress</Dropdown.Item>
                        <Dropdown.Item href="#/action-3" className='text-danger'>Pending</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <button className='btn'><AddTask /></button>
                </div>
              </div>

              <div className="mt-4">


                <div className="row shadow pt-2 rounded mt-2">
                  <div className="col-md-4">
                    <div className='text-center'><p className=''>Name</p></div>
                  </div>
                  <div className="col-md-3">
                    <p className=''>Email</p>
                  </div>
                  <div className="col-md-3">
                    <p className='ms-2'>Project</p>
                  </div>
                  <div className="col-md-2">
                    <p className='ms-2'>Status</p>
                  </div>
                </div>


                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-success'>Completed</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-primary'>On Progress</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-success'>Completed</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-danger'>Pending</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-success'>Completed</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-success'>Completed</p>
                  </div>
                </div>

                {/* ------------------------------------------------- */}
                <div className="row shadow p-2 rounded mt-2">
                  <div className="col-md-3">
                    <div className='d-flex justify-content-between align-items-center'>
                      <Image style={{ width: "30%" }} src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" roundedCircle />
                      <p className='me-5'>John David</p>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-between align-items-center">
                    <p className='ms-4'>johndavida@gmail.com</p>
                  </div>
                  <div className="col-md-3 d-flex align-items-center">
                    <p className='me-auto'>XYX Project</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-between align-items-center">
                    <p className='text-success'>Completed</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default TaskManagement