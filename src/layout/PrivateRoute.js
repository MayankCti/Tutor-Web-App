import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthStudent, pipGetAccessToken } from "../utils/pip";
import { pageRoutes } from "../routes/pageRoutes";

const PrivateRoute = ({ children }) => {
  const studentToken = getAuthStudent(); 
  const adminToken = pipGetAccessToken(); 
console.log("children",children);
  if (studentToken) {
    return children;
  }
  
  if (adminToken) {
    return children;
  }

  return (
    <Navigate to={studentToken ? pageRoutes.studentlogin : pageRoutes.login} />
  );
};

export default PrivateRoute;

