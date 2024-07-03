import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeDetailPage from './pages/EmployeeDetailPage';
import EmployeeForm from './components/EmployeeForm';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employees" element={<EmployeeListPage />} />
      <Route path="/employees/:id" element={<EmployeeDetailPage />} />
      <Route path="/create" element={<EmployeeForm />} />
    </Routes>
  );
};

export default App;
