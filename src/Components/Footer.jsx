import React from 'react'
import { faFacebook, faInstagram, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className=" bg-black rounded rounded-5 m-5 p-5 mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className='text-light fw-bolder'>NextPlan <FontAwesomeIcon icon={faStackOverflow} className='me-5' /></h3>
              <p className='mt-3' style={{ textAlign: 'justify', color:"white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet aliquam harum! Veniam ipsum voluptatibus consequuntur dolorem aspernatur. Aliquam reiciendis dolores dignissimos aperiam praesentium suscipit harum! Qui nisi aut consectetur?</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 d-md-flex justify-content-center">
              <div>
                <h3 className='text-light fw-bolder'>GUIDES</h3>
                <Link to={'/'} style={{textDecoration:"none"}}><p className='mt-4 fs-bolder' style={{color:"white"}}>HOME</p></Link>
                <Link to={'/testimonials'} style={{textDecoration:"none"}}><p className=' fs-bolder' style={{color:"white"}}>TESTIMONIALS</p></Link>
                <Link to={'/contact'} style={{textDecoration:"none"}}><p className=' fs-bolder' style={{color:"white"}}>CONTACT</p></Link>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <h3 className='text-light fw-bolder'>CONTACT US</h3>
              <div className='d-flex mt-3'>
                <input type="text" placeholder='Email Id' className='form-control rounded-0' />
                <button className='btn btn-warning ms-3 rounded-0'>Subscribe</button>
              </div>
              <div className="d-flex mt-5 justify-content-between">
                <FontAwesomeIcon icon={faInstagram} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faFacebook} className='fa-2x text-light' />
                <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x text-light' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer