// EmployeeListPage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../authService';

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = getToken();
        const response = await axios.get('http://localhost:5000/api/employees', {
          headers: {
            'x-auth-token': token,
          },
        });
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            <Link to={`/employees/${employee._id}`}>{employee.name}</Link> - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeListPage;
