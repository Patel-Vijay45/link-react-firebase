import { lazy } from 'react';
import LoginPage from "../views/auth/Login.jsx" 
import GuestGuard from "../auth/GuestGuard.jsx";
// // project imports

// import Loadable from 'ui-component/Loadable';
// const LoginPage = Loadable(lazy(() => import('views/auth/login.jsx')));
const AuthRoutes={
    path:"/login",
    element:<GuestGuard><LoginPage/></GuestGuard>,
     
}

export default AuthRoutes;