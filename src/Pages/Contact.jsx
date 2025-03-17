import React from 'react'

function Contact() {
  return (
    <>

    <div className="container " style={{marginTop:"150px"}}>
      <div className="row ">
        <div className="col-md-6 ">
          <img src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww" alt="" style={{width:"100%"}} />
        </div>
        <div className="col-md-6">
          <div className="rounded py-5 px-3 shadow bg-black mt-3">
            <form action="">
              <input type="text" className='form-control mb-5' placeholder='Enter Your Name' />
              <input type="email" className='form-control mb-5' placeholder='Enter your Email' />
              <textarea type="text" placeholder='Leave us a Few words'className='form-control mb-3' />
              <div className='d-flex justify-content-center'><button className='btn btn-primary'> Submit</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Contact