import useAuth from "../hooks/useAuth";
import { getCurrentUser } from "../utils/firebase/firebase.utils";
import { Navigate } from "react-router-dom";
const GuestGuard = ({ children }) => {
  let { isAuthenticated } = useAuth();
  let res = getCurrentUser();
  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }
  return <>{children}</>;
};

export default GuestGuard;
