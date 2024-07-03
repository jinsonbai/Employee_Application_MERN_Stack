// ProtectedRoute.jsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../authService';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    getToken()
      ? <Component {...props} />
      : <Navigate to='/login' />
  )} />
);

export default ProtectedRoute;
