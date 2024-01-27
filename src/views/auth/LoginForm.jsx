import { Navigate } from "react-router-dom";
import Button from "../../ui-components/Button";
import {
  signInWithGooglePopup,
  getCurrentUser,
  signOutGoogle,
} from "../../utils/firebase/firebase.utils.js";
const LoginForm = () => {
  const googleSignIn = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      alert(error);
    }
    return <Navigate replace to="/dashboard" />;
  };

  const googleLogout = () => {
    signOutGoogle();
  };

  const getUser = () => {
    console.log(getCurrentUser());
  };

  return (
    <>
      <Button
        title="Google+"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={googleSignIn}
      />
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
    </>
  );
};
export default LoginForm;
