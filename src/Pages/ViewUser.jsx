import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Image, Spinner, Container, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { getUserByIdAPI } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileHeader = ({ user }) => (
  <div className="profile-header bg-primary text-white py-4 mb-4 rounded-top">
    <Container>
      <Row className="align-items-center">
        <Col md={2}>
          {user.profileImage ? (
            <Image 
              src={user.profileImage} 
              roundedCircle 
              fluid
              className="profile-img border border-4 border-white shadow"
            />
          ) : (
            <div className="profile-img-placeholder d-flex align-items-center justify-content-center bg-white text-primary rounded-circle border border-4 border-white shadow">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </Col>
        <Col md={10}>
          <h1 className="mb-1">{user.name}</h1>
          <div className="d-flex flex-wrap gap-2 align-items-center">
            <Badge bg="light" text="dark" className="fs-6">
              {user.designation}
            </Badge>
            <span className="text-white-50">•</span>
            <span className="text-white">{user.department} Department</span>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

const DetailCard = ({ title, children }) => (
  <Card className="mb-3 shadow-sm">
    <Card.Header className="bg-light">
      <h5 className="mb-0">{title}</h5>
    </Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);

const DetailItem = ({ label, value }) => (
  <div className="mb-2">
    <strong className="text-muted">{label}:</strong>
    <div>{value || 'Not provided'}</div>
  </div>
);

function ViewUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const result = await getUserByIdAPI(id);
        
        if (!result?.data) {
          throw new Error('User not found');
        }

        setUser(result.data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setError(error.message || 'Failed to load user details');
        toast.error(error.message || 'Failed to load user details');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleBack = () => navigate(-1);

  const formatDate = (dateString) => {
    if (!dateString) return 'Not provided';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <div className="alert alert-danger">
          {error}
          <Button variant="link" onClick={handleBack}>
            Go Back
          </Button>
        </div>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container className="mt-5">
        <div className="alert alert-warning">
          User not found
          <Button variant="link" onClick={handleBack}>
            Go Back
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      
      <Container className="py-4 px-0 px-md-3" style={{marginTop:"120px"}}>
        <Button 
          variant="outline-primary" 
          onClick={handleBack} 
          className="mb-3"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Users
        </Button>

        <Card className="border-0 shadow-sm overflow-hidden">
          <ProfileHeader user={user} />
          
          <Card.Body className="p-4">
            <Row>
              <Col md={6}>
                <DetailCard title="Contact Information">
                  <DetailItem label="Email" value={user.email} />
                  <DetailItem label="Phone" value={user.phone} />
                </DetailCard>
              </Col>
              <Col md={6}>
                <DetailCard title="Personal Details">
                  <DetailItem label="Date of Birth" value={formatDate(user.dateOfBirth)} />
                </DetailCard>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <style>{`
        .profile-header {
          background: linear-gradient(135deg, #4e73df 0%, #224abe 100%);
        }
        .profile-img {
          width: 120px;
          height: 120px;
          object-fit: cover;
        }
        .profile-img-placeholder {
          width: 120px;
          height: 120px;
          font-size: 48px;
          font-weight: bold;
        }
        .detail-card {
          transition: transform 0.2s;
        }
        .detail-card:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}

export default ViewUser;