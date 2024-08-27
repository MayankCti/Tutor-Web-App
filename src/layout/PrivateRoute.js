import React from "react";
import { Navigate } from "react-router-dom";
import { getAuthStudent, pipGetAccessToken } from "../utils/pip";
import { pageRoutes } from "../routes/pageRoutes";

const PrivateRoute = ({ children }) => {
  const urlSegment = window?.location?.pathname.split("/")[1];
  const isStudentRoute = urlSegment === "student";
  const isAuthenticated = isStudentRoute
    ? getAuthStudent()
    : pipGetAccessToken();
  const redirectTo = isStudentRoute
    ? pageRoutes.studentlogin
    : pageRoutes.login;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
