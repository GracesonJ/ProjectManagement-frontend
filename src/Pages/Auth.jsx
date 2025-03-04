import React from 'react'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth() {
  return (
    <>
        <div  style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container w-75">
          <div className='bg-success p-3 rounded rounded-5'>
            <Row>
              <Col md={6} className='p-4 d-flex justify-content-center align-items-center'>
                <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'70%'} />
              </Col>
              <Col md={6} className='p-5 d-flex justify-content-center text-light'>
                <form className='w-100'>
                  <h1 className='text-center text-light fw-bolder'><FontAwesomeIcon icon={faStackOverflow} className='fa-2x' />NEXTPLAN</h1>
                  <h5 className='text-center mb-5'>Sign In to Your Account</h5> 
                    {/* <h5 className='text-center mb-5'>Sign Up to Your Account</h5> */}
                    {/* <div className="mb-3 ">
                      <input type="text" placeholder='Username' className='form-control rounded-0'  />
                    </div> */}
                  <div className="mb-3 ">
                    <input type="text" placeholder='Email ID' className='form-control rounded-0'  />
                  </div>
                  <div className="mb-3">
                    <input type="password" placeholder='Password' className='form-control rounded-0'  />
                  </div>
                  <div className="mb-3">
                   
                      <div>
                        <Link to={''}><button type='button' className='btn btn-warning w-100 rounded-0' >Login</button></Link>
                        <p className='mt-3'>New User? click Here to<Link to={'/register'} className='text-danger'> Register</Link></p>
                      </div>
                     
                      {/* <div>
                        <button type='button' className='btn btn-warning w-100 rounded-0' >Register</button>
                        <p className='mt-3'>Already a User? click Here to <Link to={'/login'} className='text-danger'> Login</Link></p>
                      </div> */}
                  </div>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      </div>

    </>
  )
}

export default Auth