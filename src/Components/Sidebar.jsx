import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function Sidebar() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [role, setRole] = useState("")
    console.log(role);


    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const existingUser = JSON.parse(sessionStorage.getItem("existingUser"))
            setRole(sessionStorage.getItem("role"))
            let name = existingUser.name

            if (name) {
                setUsername(existingUser?.name)
            } else {
                setUsername(existingUser?.companyName)
            }
        } else {
            toast.error(`Please Login`)
            setTimeout(() => {
                navigate('/login')
            }, 2000)
        }
    }, [])


    return (
        <>
            <div className="shadow rounded rounded-4">
                <h4 className='p-3 fw-bolder text-center m-2'>Welcome <span className='text-warning'>{username}</span></h4>
                <hr/>
                <div className="row ">
                    <div className='d-flex justify-content-center align-items-center my-3 mt-2' >
                        <Link to={'/dashboard'} style={{ textDecoration: "none" }}><p className='text-black fw-bolder fs-5'>DASHBOARD</p></Link>
                    </div>
                </div>
                {role == "Company" && (<div className='row'>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <Link to={'/projectmanagement'} style={{ textDecoration: "none" }}><p className=' text-black fw-bolder fs-5'>PROJECT MANAGEMENT</p></Link>
                    </div>
                </div>)
                }
                {role == "Manager" && (<div className='row'>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <Link to={'/taskmanagement'} style={{ textDecoration: "none" }}><p className=' text-black fw-bolder fs-5'>TASK MANAGEMENT</p></Link>
                    </div>
                </div>)}

                {(role === "Company" || role === "Manager") && (<div className='row'>
                    <div className='d-flex justify-content-center align-items-center my-3'>
                        <Link to={'/usermanagement'} style={{ textDecoration: "none" }}><p className=' text-black fw-bolder fs-5'>USER MANAGEMENT</p></Link>
                    </div>
                </div>
                )}
                <div className='row'>
                    <div className="d-flex justify-content-center align-items-center my-3">
                        <Link to={'/reports'} style={{ textDecoration: "none" }}><p className=' text-black fw-bolder fs-5'>REPORTS</p></Link>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    theme="colored"
                />
            </div>
        </>
    )
}

export default Sidebar