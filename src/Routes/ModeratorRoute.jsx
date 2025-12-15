import React from 'react';
import useRole from '../hooks/useRole';
import LoadingSpinner from '../Pages/LoadingSpinner';
import { Navigate } from 'react-router';

const ModeratorRoute = ({ children }) => {
    const { role, isLoading } = useRole()

    if (isLoading) return <LoadingSpinner />
    if (role === 'Moderator') return children
    return <Navigate to='/' replace='true' />
};

export default ModeratorRoute;