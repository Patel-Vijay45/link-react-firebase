import Button from "../../ui-components/Button";

const LoginForm = () => {

  const googleClick=()=>{
    console.log('called'); 
  }
  return (
    <>
      <Button
        title="Google+"
        buttonclass="rounded-pill btn-google-plus"
        iconClass="tf-icons bx bxl-google-plus me-1"
        onClick={googleClick}
      />
    </>
  );
};
export default LoginForm;
