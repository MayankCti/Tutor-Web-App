import React from "react";
import { Navigate } from "react-router-dom";
import { pageRoutes } from "../routes/path";
import { getAuthStudent } from "../../utils/pip";

const PrivateRoute = ({ children }) => {
  const isAuth = getAuthStudent();
  // const isAuth =  true
  return isAuth ? children : <Navigate to={pageRoutes?.login} />;
};

export default PrivateRoute;
