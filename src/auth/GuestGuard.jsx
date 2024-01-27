
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext.js";
import { Navigate } from "react-router-dom";
const GuestGuard = ({ children }) => {

  const {currentUser} = useContext(AuthContext);
  if (currentUser) {
    return <Navigate replace to="/dashboard" />;
  }
  return <>{children}</>;
};

export default GuestGuard;
