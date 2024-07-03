// EmployeeDetailPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../authService';

const EmployeeDetailPage = ({ match }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const token = getToken();
        const response = await axios.get(`http://localhost:5000/api/employees/${match.params.id}`, {
          headers: {
            'x-auth-token': token,
          },
        });
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [match.params.id]);

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
};

export default EmployeeDetailPage;
