 
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../context/AuthContext.js";
const AuthGuard = ({ children }) => {

  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    return <>{children}</>;
  }
  return <Navigate replace to="/login" />;
};

export default AuthGuard;
