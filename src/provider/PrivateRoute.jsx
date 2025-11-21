import React, { use } from 'react';
import { AuthContecxt } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContecxt);
    const location = useLocation();
    console.log(location);
    if(loading){
        return <div className='flex items-center justify-center h-screen'><span className="loading loading-spinner text-error"></span></div>
    }
    
    if(user && user.email){
        return children;
    }
    
    return <Navigate to='/auth/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;