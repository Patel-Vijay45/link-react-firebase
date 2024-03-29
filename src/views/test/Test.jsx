import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../ui-components/Button";
import {
  getCurrentUser, signOutGoogle, 
} from "../../utils/firebase/firebase.utils";
 
const Test = () => { 
const navigate=useNavigate();
  const googleLogout = () => {
    signOutGoogle();
    window.location.reload();
  };
  const getUser = () => {
    console.log(getCurrentUser());
  };
  const navDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <Button
        title="logout"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={googleLogout}
      />
      <Button
        title="current"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={getUser}
      />
      <Button
        title="dashboard"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={navDashboard}
      />
    </>
  );
};

export default Test;
