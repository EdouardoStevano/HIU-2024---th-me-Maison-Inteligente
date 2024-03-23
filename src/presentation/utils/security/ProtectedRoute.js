import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';

// Config storage importation
import getConfig from "../config"

export const ProtectedRoute = ({children, roles}) => {

    const { token, role } = getConfig()

    if (token) {
      if(roles.includes(role)){
        return <Outlet />;
      }else {
        toast.error("Vous n\'avez pas accès à cette page.")
        return <Navigate to={'/unauthorized'} />;      
      }
    } 

    return children
}

export default ProtectedRoute