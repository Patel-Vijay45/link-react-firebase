import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../ui-components/Button";
import {
  getCurrentUser, signOutGoogle, 
} from "../../utils/firebase/firebase.utils";
 
const Dashboard = () => { 
  const navigate = useNavigate();
  const googleLogout = () => {
    signOutGoogle();
    window.location.reload();
  };
  const getUser = () => {
    console.log(getCurrentUser());
  };
  const navTest = () => {
    navigate('/test');
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
        title="test"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={navTest}
      />
    </>
  );
};

export default Dashboard;
