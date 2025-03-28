import React, { useState } from 'react'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { userLoginApi } from '../services/allApi'

function Auth() {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info(`Fill the form Completely`)
      return // Add return to stop execution if validation fails
    }

    try {

      const result = await userLoginApi(userDetails)
      console.log(result);



      if (result.status === 200) {
        toast.success(`Login Successfull`)
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUsers))
        sessionStorage.setItem("token", result.data.token)
        sessionStorage.setItem("role", (result.data.existingUsers.designation))
        setUserDetails({
          email: "",
          password: ""
        })
        navigate("/dashboard")
      } else {
        toast.warning(result.response?.data?.message || "Login failed")
      }
    } catch (error) {
      console.error("Login error:", error)
      toast.error(`Something went wrong`)
    }
  }

  return (
    <>
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='mt-5'>
        <div className="container w-75">
          <div className='bg-black p-3 rounded rounded-5'>
            <Row>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'70%'} />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center text-light'>
                <div className='w-100'>
                  <h1 className='text-center text-light fw-bolder'><FontAwesomeIcon icon={faStackOverflow} className='fa-2x me-3' />NEXTPLAN</h1>
                  <h5 className='text-center mb-5'>Sign In to Your Account</h5>
                  <div className="mb-3 ">
                    <input
                      onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      type="email"
                      placeholder='Email ID'
                      className='form-control rounded-0'
                      value={userDetails.email}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                      type="password"
                      placeholder='Password'
                      className='form-control rounded-0'
                      value={userDetails.password}
                    />
                  </div>
                  <div className="mb-3">
                    <div>
                      <button onClick={handleLogin} type='button' className='btn btn-dark w-100 rounded-0'>Login</button>
                      <p className='mt-3'>New User? click Here to<Link to={'/workspaceregister'} className='text-danger ms-2' style={{ textDecoration: "none" }}> Register</Link></p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
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

export default Auth