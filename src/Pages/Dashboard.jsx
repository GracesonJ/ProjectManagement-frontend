import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Card, ProgressBar, Table } from 'react-bootstrap';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(...registerables);

function Dashboard() {
  // Sample data
  const projects = [
    { id: 1, name: 'Website Redesign', progress: 75, deadline: '2023-12-15', status: 'In Progress' },
    { id: 2, name: 'Mobile App Development', progress: 30, deadline: '2024-01-20', status: 'In Progress' },
    { id: 3, name: 'Marketing Campaign', progress: 100, deadline: '2023-11-30', status: 'Completed' }
  ];

  const recentTasks = [
    { id: 1, name: 'Create wireframes', project: 'Website Redesign', assignee: 'John Doe', due: '2023-12-05', status: 'Completed' },
    { id: 2, name: 'API Integration', project: 'Mobile App Development', assignee: 'Jane Smith', due: '2023-12-10', status: 'In Progress' },
    { id: 3, name: 'Content Creation', project: 'Marketing Campaign', assignee: 'Mike Johnson', due: '2023-11-25', status: 'Pending' }
  ];

  // Chart data
  const taskStatusData = {
    labels: ['Completed', 'In Progress', 'Pending', 'Overdue'],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          '#4BC0C0',
          '#36A2EB',
          '#FFCE56',
          '#FF6384'
        ]
      }
    ]
  };

  const projectTimelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Planned',
        data: [30, 50, 70, 90, 100, 100],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        tension: 0.4
      },
      {
        label: 'Actual',
        data: [25, 45, 60, 80, 85, 95],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.1)',
        tension: 0.4
      }
    ]
  };

  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row pt-5 mt-5">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 shadow rounded rounded-4 p-4 mt-5">
          <h2 className="mb-4">Project Dashboard</h2>
          
          {/* Summary Cards */}
          <div className="row mb-4">
            <div className="col-md-3 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Active Projects</Card.Title>
                  <h2 className="text-primary">5</h2>
                  <Card.Text>2 behind schedule</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Tasks</Card.Title>
                  <h2 className="text-info">42</h2>
                  <Card.Text>12 overdue</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Team Members</Card.Title>
                  <h2 className="text-success">8</h2>
                  <Card.Text>2 on leave</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Budget</Card.Title>
                  <h2 className="text-warning">$24,500</h2>
                  <Card.Text>85% utilized</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Charts Row */}
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Task Status Distribution</Card.Title>
                  <div style={{ height: '250px' }}>
                    <Chart type='doughnut' data={taskStatusData} />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 mb-3">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Project Timeline</Card.Title>
                  <div style={{ height: '250px' }}>
                    <Chart 
                      type='line' 
                      data={projectTimelineData} 
                      options={{ 
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                              display: true,
                              text: 'Completion %'
                            }
                          }
                        }
                      }} 
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* Projects Progress */}
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Active Projects</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Progress</th>
                    <th>Deadline</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>
                        <ProgressBar now={project.progress} label={`${project.progress}%`} />
                      </td>
                      <td>{project.deadline}</td>
                      <td>
                        <span className={`badge ${
                          project.status === 'Completed' ? 'bg-success' : 
                          project.status === 'In Progress' ? 'bg-primary' : 'bg-warning'
                        }`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Recent Tasks */}
          <Card>
            <Card.Body>
              <Card.Title>Recent Tasks</Card.Title>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>Task</th>
                    <th>Project</th>
                    <th>Assignee</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTasks.map(task => (
                    <tr key={task.id}>
                      <td>{task.name}</td>
                      <td>{task.project}</td>
                      <td>{task.assignee}</td>
                      <td>{task.due}</td>
                      <td>
                        <span className={`badge ${
                          task.status === 'Completed' ? 'bg-success' : 
                          task.status === 'In Progress' ? 'bg-primary' : 'bg-warning'
                        }`}>
                          {task.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;