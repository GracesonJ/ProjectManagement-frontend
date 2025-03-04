import React from 'react'
import { faFacebook, faInstagram, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <div className=" bg-success rounded rounded-5 m-5 p-5 mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h3 className='text-light fw-bolder'>NextPlan <FontAwesomeIcon icon={faStackOverflow} className='me-5' /></h3>
              <p className='mt-3' style={{ textAlign: 'justify', color:"black" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet aliquam harum! Veniam ipsum voluptatibus consequuntur dolorem aspernatur. Aliquam reiciendis dolores dignissimos aperiam praesentium suscipit harum! Qui nisi aut consectetur?</p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 d-md-flex justify-content-center">
              <div>
                <h3 className='text-light fw-bolder'>GUIDES</h3>
                <Link to={'/'}><p className='mt-4 fs-bolder' style={{color:"black"}}>HOME</p></Link>
                <Link to={'/about'}><p className=' fs-bolder' style={{color:"black"}}>ABOUT</p></Link>
                <Link to={'/testimonials'}><p className=' fs-bolder' style={{color:"black"}}>TESTIMONIALS</p></Link>
                <Link to={'/contact'}><p className=' fs-bolder' style={{color:"black"}}>CONTACT</p></Link>
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