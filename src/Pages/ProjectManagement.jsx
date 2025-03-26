import { Card, ProgressBar, Spinner, Button } from 'react-bootstrap';
import AddProject from '../Components/AddProject';
import Sidebar from '../Components/Sidebar';

function ProjectManagement() {
  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row pt-5">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 shadow rounded rounded-4 p-1 mt-5">
          <div className='p-3'>
            <div className='mb-3'>
              <h2 className='text-dark fw-bolder mb-0'>PROJECT MANAGEMENT</h2>
              <p className='text-muted'>Manage your projects and assign members here.</p>
            </div>
            <hr className='w-100 text-warning mb-4' />

            <div className="d-flex justify-content-between mb-4 flex-column flex-md-row">
              <div className="w-100 me-md-3 mb-3 mb-md-0">
                <input
                  type="text"
                  className='form-control'
                  placeholder='Search projects by name or client...'
                />
              </div>
              <div>
                <AddProject />
              </div>
            </div>

            {/* Loading State (commented out but kept for reference) */}
            {/* <div className="text-center py-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              <p className="mt-2">Loading projects...</p>
            </div> */}

            {/* Projects Grid */}
            <div className="row g-3">
              {/* Project Card Example */}
              <div className="col-12 col-md-6 col-lg-4">
                <Card className="h-100 shadow-sm">
                  <Card.Header className="bg-primary bg-opacity-10 d-flex justify-content-between">
                    <Card.Title className="mb-0 fs-6 text-truncate">
                      Website Redesign
                    </Card.Title>
                    <span className="badge bg-primary">
                      In Progress
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <small className="text-muted d-block">Client</small>
                      <div className="fw-medium">Acme Corp</div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Manager</small>
                      <div>
                        Sarah Johnson
                        <small className="text-muted d-block">sarah@example.com</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Progress</small>
                      <ProgressBar
                        now={65}
                        label="65%"
                        variant="warning"
                      />
                    </div>

                    <div>
                      <small className="text-muted d-block">Deadline</small>
                      <div>
                        June 15, 2023
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Second Project Card Example */}
              <div className="col-12 col-md-6 col-lg-4">
                <Card className="h-100 shadow-sm">
                  <Card.Header className="bg-success bg-opacity-10 d-flex justify-content-between">
                    <Card.Title className="mb-0 fs-6 text-truncate">
                      Mobile App Development
                    </Card.Title>
                    <span className="badge bg-success">
                      Completed
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <small className="text-muted d-block">Client</small>
                      <div className="fw-medium">Tech Solutions Inc.</div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Manager</small>
                      <div>
                        Michael Chen
                        <small className="text-muted d-block">michael@example.com</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Progress</small>
                      <ProgressBar
                        now={100}
                        label="100%"
                        variant="success"
                      />
                    </div>

                    <div>
                      <small className="text-muted d-block">Deadline</small>
                      <div>
                        March 30, 2023
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Third Project Card Example */}
              <div className="col-12 col-md-6 col-lg-4">
                <Card className="h-100 shadow-sm">
                  <Card.Header className="bg-warning bg-opacity-10 d-flex justify-content-between">
                    <Card.Title className="mb-0 fs-6 text-truncate">
                      Marketing Campaign
                    </Card.Title>
                    <span className="badge bg-warning">
                      On Hold
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <small className="text-muted d-block">Client</small>
                      <div className="fw-medium">Global Brands</div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Manager</small>
                      <div>
                        Emily Rodriguez
                        <small className="text-muted d-block">emily@example.com</small>
                      </div>
                    </div>

                    <div className="mb-3">
                      <small className="text-muted d-block">Progress</small>
                      <ProgressBar
                        now={30}
                        label="30%"
                        variant="danger"
                      />
                    </div>

                    <div>
                      <small className="text-muted d-block">Deadline</small>
                      <div className="text-danger">
                        May 1, 2023
                        <span className="ms-2">(Overdue)</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectManagement;