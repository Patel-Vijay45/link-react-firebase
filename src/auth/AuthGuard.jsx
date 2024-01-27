import useAuth from "../hooks/useAuth";
import { getCurrentUser } from "../utils/firebase/firebase.utils";
import { Navigate } from "react-router-dom";
const AuthGuard = ({ children }) => {

  console.log(children);
  let {
    isAuthenticated,  
  } = useAuth();  
  if (isAuthenticated) {
    return <>{children}</>;
  }
  return <Navigate replace to="/login" />;
};

export default AuthGuard;
