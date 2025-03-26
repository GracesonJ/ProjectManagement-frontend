import React from 'react'
import bgPattern from '../assets/bgPattern.svg'
import abt from '../assets/abt.svg'
import taskManage from '../assets/taskManage.png'
import projectTimeline from '../assets/projectTimeline.png'
import teamWork from '../assets/teamWork.png'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <>

      <div className=" container" style={{marginTop:"120px"}}>
        <section style={{ backgroundImage: `url(${bgPattern})` }}>
          <div className="row d-flex justify-content-center align-items-center p-5">
            <div className="col-md-3"></div>
            <div className="col-md-7 p-5">

              <p className="fw-bolder fs-1 mt-5">
                Manage Your Projects & Tasks
              </p>
              <h1 className="fw-bolder fs-1 mt-3">
                Seamlessly with <span className="text-success">NextPlan</span>
              </h1>

              <div className=' mt-5'>
                <Link to={'/workspaceregister'}><button className='btn btn-warning me-3'>Create Workspace</button></Link>
                <Link to={'/login'}><button className='btn btn-primary'>LOGIN</button></Link>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </section>

       



        <section className='my-5' id='#about'>
          <div className="row mx-5">
            <div className="col-md-1"></div>
            <div className="col-md-3">
              <h2 className="fw-bolder fs-1">About <span className='text-success'>NextPlan</span></h2>
              <p className="" style={{ textAlign: "justify" }}>
                <span className='fw-bolder'>NextPlan</span> is an intuitive and efficient project and task management CRM designed to empower teams with seamless collaboration tools. Whether you're managing a small team or handling large-scale projects, NextPlan provides the flexibility and structure needed to keep everyone on track and aligned toward common goals.
              </p>
              <p className="" style={{ textAlign: "justify" }}>
                With NextPlan, you can create detailed tasks, assign team members, set priorities, and monitor progress in real time. It integrates project timelines, milestone tracking, and notifications, ensuring nothing falls through the cracks.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className='mt-5'><img src={abt} alt="" style={{ width: "75%" }} /></div>
            </div>
            <div className="col-md-3 mt-5">
              <p className="" style={{ textAlign: "justify" }}>
                Built for modern teams, NextPlan helps you prioritize important tasks, optimize productivity, and meet deadlines with confidence. Its intuitive dashboard makes it easy to visualize progress, while the detailed task views provide clarity on what needs to be done.
              </p>
              <p className="" style={{ textAlign: "justify" }}>
                Take control of your projects with NextPlan. Say goodbye to chaos and confusion, and embrace a new level of efficiency and team cohesion.
              </p>
            </div>

            <div className="col-md-1"></div>
          </div>
        </section>

        <div className='d-flex justify-content-center align-items-center'><hr className='w-75' /></div>

        <section>
          <div className='container mt-5'>
            <h1 className='text-center fw-bolder mb-5'>All-in-One CRM for Managing Tasks and Projects</h1>
            <div className="row">
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3 d-flex justify-content-center align-items-center bg-succes'>
                  <Card.Img variant="top" src={taskManage} style={{ width: "40%" }} />
                  <Card.Body>
                    <Card.Title className='text-center'>Task Management</Card.Title>
                    <Card.Text>
                      Assign, organize, and track all tasks in one place.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3 d-flex justify-content-center align-items-center'>
                  <Card.Img variant="top" src={projectTimeline} style={{ width: "40%" }} />
                  <Card.Body>
                    <Card.Title className='text-center'>Project Timeline</Card.Title>
                    <Card.Text>
                      Visualize project milestones and deadlines.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-4">
                <Card style={{ width: '100%' }} className='p-3 d-flex justify-content-center align-items-center'>
                  <Card.Img variant="top" src={teamWork} style={{ width: "40%" }} />
                  <Card.Body>
                    <Card.Title className='text-center'>Team Collaboration</Card.Title>
                    <Card.Text>
                      Collaborate with team members.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>



        <section >

         <div className=" bg-black rounded rounded-5 m-5 p-5">
            <div className="container">
              <h1 className="text-center text-light">Get Started with <span className='fw-bolder'>NextPlan</span> CRM Today</h1>
              <p className="text-center text-light">Start managing your projects and tasks efficiently with our intuitive CRM. No credit card required.</p>
              <Link to={'/register'} className='d-flex justify-content-center' style={{ textDecoration: "none" }}>
                <button variant='primary' size='lg' className="btn btn-primary">
                  Get for Free
                </button>
              </Link>
            </div>
         </div>
        </section>
      </div>

    </>
  )
}

export default Home