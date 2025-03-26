import axios from 'axios';
import { commonApi } from './commonApi';
import { serverUrl } from './serverUrl';

// Authentication APIs
export const registerCompanyAPI = (reqBody) => {
  return commonApi('POST', `${serverUrl}/register-company`, reqBody, "");
};

export const registerUserAPI = (userDetails) => {
  const token = sessionStorage.getItem("token");
  return commonApi('POST', `${serverUrl}/register-user`, userDetails, {
    'Authorization': `Bearer ${token}`
  });
};

export const userLoginApi = (reqBody) => {
  return commonApi('POST', `${serverUrl}/user-login`, reqBody, "");
};

// User Management APIs
// export const getAllUsersAPI = (searchKey) => {
//   const token = sessionStorage.getItem("token");
//   return commonApi('GET', `${serverUrl}/all-users?search=${searchKey}`, "", {
//     'Authorization': `Bearer ${token}`
//   });
// };

// Update the API call to match new endpoint
// allApi.js
export const getCompanyUsersApi = async (companyId) => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) throw new Error('No authentication token found');
    if (!companyId) throw new Error('No company ID provided');

    const response = await axios.get(
      `${serverUrl}/companies/${companyId}/users`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000
      }
    );

    // Check if response.data exists and has the expected structure
    if (!response.data) {
      throw new Error('Empty response from server');
    }

    // Handle different possible response formats
    if (Array.isArray(response.data)) {
      // If the response is directly an array
      return { success: true, data: response.data };
    } else if (response.data.data && Array.isArray(response.data.data)) {
      // If the response is { data: [], ... }
      return { success: true, data: response.data.data };
    } else if (response.data.users && Array.isArray(response.data.users)) {
      // If the response is { users: [], ... }
      return { success: true, data: response.data.users };
    } else {
      throw new Error('Invalid data format received');
    }

  } catch (error) {
    console.error('API Error:', {
      url: `/companies/${companyId}/users`,
      status: error.response?.status,
      message: error.message,
      responseData: error.response?.data
    });
    throw error;
  }
};

export const getUserByIdAPI = async (userId) => {
  const token = sessionStorage.getItem("token");
  return commonApi("GET", `${serverUrl}/users/${userId}`, "", {
    "Authorization": `Bearer ${token}`
  });
};

// add project
export const addProjectAPI = async (reqBody, reqHeader) => {
  return await commonApi('POST', `${serverUrl}/addprojects`, reqBody, reqHeader);
};

// get Manager List
export const getManagerListAPI = async (reqHeader) => {
  return await commonApi(`GET`, `${serverUrl}/get-managerlist`, "", reqHeader)
}







