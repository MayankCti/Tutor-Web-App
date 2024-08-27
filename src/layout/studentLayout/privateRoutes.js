import React from "react";
import { Navigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import { getAuth } from "../utils/pip";



const PrivateRoute = ({children}) => {
    const isAuth =  getAuth();
    // const isAuth =  true
    return isAuth ? children : <Navigate to= {pageRoutes?.login} />

}

export default PrivateRoute


