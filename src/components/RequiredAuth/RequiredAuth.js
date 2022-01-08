import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequiredAuth = ( { children }) => {
    const { user } = useAuth();
    return  user.email ? children : <Navigate to = "/login"></Navigate> ;
};

export default RequiredAuth;