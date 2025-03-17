import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className="shadow rounded rounded-4" >
                <div className="row ">
                    <div className='d-flex justify-content-center align-items-center my-3 mt-5' >
                        <Link to={'/dashboard'} style={{textDecoration:"none"}}><p className='text-black fw-bolder fs-5'>DASHBOARD</p></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <Link to={'/projectmanagement'} style={{textDecoration:"none"}}><p className=' text-black fw-bolder fs-5'>PROJECT MANAGEMENT</p></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <Link to={'/taskmanagement'} style={{textDecoration:"none"}}><p className=' text-black fw-bolder fs-5'>TASK MANAGEMENT</p></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <Link to={'/usermanagement'} style={{textDecoration:"none"}}><p className=' text-black fw-bolder fs-5'>USER MANAGEMENT</p></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <Link to={'/reports'} style={{textDecoration:"none"}}><p className=' text-black fw-bolder fs-5'>REPORTS</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar