import React from 'react'
import { Navigate, Outlet } from 'react-router';

// Config storage importation
import getConfig from "../config"

export const AuthRedirect = ({children}) => {

    const { token } = getConfig()

    if (!token) {
        return <Outlet/>
      }else{
        return <Navigate to={'/dashboard'} />; 
      }
    return children
}

export default AuthRedirect