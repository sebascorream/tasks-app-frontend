import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function ProtectedRoute() {
    const {loading, isAuthenticated} = useAuth();

    if(loading) return <h3>Loading...</h3>;

    if(!loading && !isAuthenticated) return <Navigate to="/login" replace/>;

    return <Outlet/>;
  
}

export default ProtectedRoute;
