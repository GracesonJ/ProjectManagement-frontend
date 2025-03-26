import React, { useContext, useEffect, useState, useMemo, useCallback } from 'react';
import { Button, Card, Dropdown, Form, Image, Spinner, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { getCompanyUsersApi } from '../services/allApi';
import { addResponseContext } from '../context/ContextShare';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../Components/Sidebar';
import AddUser from '../Components/AddUser';
import { useNavigate } from 'react-router-dom';

const DefaultAvatar = React.memo(({ name }) => (
  <div style={{
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    color: "#666",
    fontSize: "40px",
    fontWeight: "bold"
  }}>
    <span>{name ? name.charAt(0).toUpperCase() : '👤'}</span>
  </div>
));

const DESIGNATIONS = ['Manager', 'Developer', 'Tester', 'Designer', 'All'];

function UserManagement() {
  const { addResponse } = useContext(addResponseContext);
  const [allUsers, setAllUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [designationFilter, setDesignationFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const company = JSON.parse(sessionStorage.getItem("existingUser") || "{}");
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const result = await getCompanyUsersApi(company._id);
      setAllUsers(result.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
      // Silently fail without showing toast
      setAllUsers([]); // Set empty array to avoid showing previous data
    } finally {
      setLoading(false);
    }
  }, [company?._id]);

  useEffect(() => {
    if (company?._id) {
      fetchUsers();
    }
  }, [company?._id, addResponse, fetchUsers]);

  const filteredUsers = useMemo(() => {
    let result = [...allUsers];

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(user =>
        (user?.name?.toLowerCase()?.includes(term)) ||
        (user?.email?.toLowerCase()?.includes(term)))
    }

    if (designationFilter) {
      result = result.filter(user =>
        user?.designation?.toLowerCase() === designationFilter.toLowerCase()
      );
    }

    return result;
  }, [allUsers, searchTerm, designationFilter]);

  const handleFilterSelect = useCallback((designation) => {
    setDesignationFilter(designation === "All" ? "" : designation);
  }, []);

  const handleCardClick = useCallback((userId) => {
    navigate(`/view-user/${userId}`);
  }, [navigate]);

  const handleEditClick = useCallback((e, userId) => {
    e.stopPropagation();
    navigate(`/edit-user/${userId}`);
  }, [navigate]);

  const resetFilters = useCallback(() => {
    setSearchTerm("");
    setDesignationFilter("");
  }, []);

  const renderUserCards = () => {
    if (loading) {
      return (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Loading users...</p>
        </div>
      );
    }

    if (filteredUsers.length === 0) {
      return (
        <div className="text-center py-5">
          <h5>No users found</h5>
          <p>Try adjusting your search or filters</p>
          <Button
            variant="outline-primary"
            onClick={resetFilters}
            className="mt-2"
          >
            Reset Filters
          </Button>
        </div>
      );
    }

    return (
      <div className="row">
        {filteredUsers.map(user => (
          <div
            key={user._id}
            className="col-md-6 col-lg-4 col-xl-3 mb-4"
            onClick={() => handleCardClick(user._id)}
            style={{ cursor: 'pointer' }}
          >
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Body className="text-center d-flex flex-column">
                {user?.profileImage ? (
                  <Image
                    src={user.profileImage}
                    roundedCircle
                    className="mb-3 align-self-center"
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    alt={user?.name || 'User'}
                    loading="lazy"
                  />
                ) : (
                  <DefaultAvatar name={user.name} />
                )}
                <Card.Title className="mb-1">{user.name}</Card.Title>
                <Card.Subtitle className="mb-2">
                  <Badge bg="info" className="text-capitalize">
                    {user.designation || 'No role'}
                  </Badge>
                </Card.Subtitle>
                <Card.Text className="mb-3">
                  <small className="d-block text-truncate">{user.email}</small>
                </Card.Text>
                <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={(e) => handleEditClick(e, user._id)}
                  className="mt-auto align-self-center"
                >
                  <FontAwesomeIcon icon={faUserPen} className="me-1" /> Edit
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container-fluid mt-5 px-4">
      <div className="row pt-5">
        <div className="col-md-3 mt-5">
          <Sidebar />
        </div>
        <div className="col-md-9 shadow rounded rounded-4 p-1 mt-5">
          <div className='p-3'>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h1 className='text-dark fw-bolder fs-4 mb-0'>USER MANAGEMENT</h1>
                <p className='text-muted'>Manage your team members and their account permissions</p>
              </div>
              <Badge pill bg="light" text="dark" className="fs-6">
                {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'}
              </Badge>
            </div>
            <hr className='w-100 text-warning' />

            <div className="d-flex justify-content-between mb-4 flex-column flex-md-row gap-3">
              <div className="position-relative flex-grow-1 me-md-3">
                <FontAwesomeIcon 
                  icon={faSearch} 
                  className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                />
                <Form.Control
                  type="text"
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="ps-5"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              
              <div className="d-flex gap-2">
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary">
                    <FontAwesomeIcon icon={faFilter} className="me-2" />
                    {designationFilter || "Filter by Designation"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {DESIGNATIONS.map((role) => (
                      <Dropdown.Item
                        key={role}
                        onClick={() => handleFilterSelect(role)}
                        active={designationFilter === role || (!designationFilter && role === 'All')}
                      >
                        {role}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <AddUser />
              </div>
            </div>

            <div className="mt-3">
              {renderUserCards()}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default React.memo(UserManagement);