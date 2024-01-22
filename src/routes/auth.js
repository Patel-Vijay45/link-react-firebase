import { lazy } from 'react';
import LoginPage from "../views/auth/Login.jsx"
// // project imports

// import Loadable from 'ui-component/Loadable';
// const LoginPage = Loadable(lazy(() => import('views/auth/login.jsx')));
const AuthRoutes={
    path:"/",
    element:"",
    children:[
        {
            path:"/login",
            element:<LoginPage/>
        }

    ]
}

export default AuthRoutes;