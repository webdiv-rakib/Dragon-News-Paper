import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    // console.log(user)
    // while firebase looking for user exist or not
    if (loading) {
        return <Loading></Loading>
    }


    if (user && user?.email) {
        return children
    }
    return <Navigate to='/auth/login'></Navigate>
    // if-> user then return children
    // else navigate to login page
};

export default PrivateRoute;