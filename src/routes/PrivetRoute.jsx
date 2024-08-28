import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <p>Loading</p>
    }
    if(user){
        return children;
    }
    return <Navigate to="/user/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;