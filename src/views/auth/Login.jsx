import "../../assets/css/page-auth.css";
import SimpleCard from "../../ui-components/SimpleCard.jsx";
import LoginForm from "./LoginForm.jsx";
const LoginPage = () => {
 
  return (
    <div className="container-xxl" >
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <SimpleCard
            title={"Welcome to Project!"}
            subtitle={"Please sign-in to your account and start the adventure"}
          >
            <div className="mt-3">
              <div className="d-grid gap-2 col-lg-6 mx-auto">
                <LoginForm />
              </div>
            </div>
          </SimpleCard>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
