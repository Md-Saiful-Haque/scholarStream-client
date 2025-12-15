import React from 'react';
import { Navigate } from 'react-router';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../Pages/LoadingSpinner';


const AdminRoute = ({ children }) => {
    const {role, isLoading} = useRole()

    if (isLoading) return <LoadingSpinner />
    if (role === 'Admin') return children
    return <Navigate to='/' replace='true' />
};

export default AdminRoute;