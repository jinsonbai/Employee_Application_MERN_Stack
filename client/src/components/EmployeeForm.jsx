// EmployeeForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../authService';

const EmployeeForm = ({ history }) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = getToken();
      await axios.post('http://localhost:5000/api/employees', { name, position, department }, {
        headers: {
          'x-auth-token': token,
        },
      });
      history.push('/employees');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} required />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
