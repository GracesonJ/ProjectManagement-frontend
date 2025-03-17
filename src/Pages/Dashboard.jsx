import React from 'react'
import Sidebar from '../Components/Sidebar'


function Dashboard() {
  return (
    <>

      <div className="container-fluid mt-5 px-4">
        <div className="row pt-5">
          <div className="col-md-3 mt-5">
            <Sidebar />
          </div>
          <div className="col-md-9 shadow rounded rounded-4 p-1 mt-5">
            <h4 className='p-3 fw-bolder'>Welcome <span className='text-warning'>User</span></h4>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard