import { lazy } from "react";
import AuthGuard from "../auth/AuthGuard.jsx";
import Dashboard from "../views/dashboard/Dashboard.jsx";
import Test from "../views/test/Test.jsx";
import { Outlet } from "react-router-dom";
// // project imports

// import Loadable from 'ui-component/Loadable';
// const LoginPage = Loadable(lazy(() => import('views/auth/login.jsx')));
const DashboardRoutes = {
  path: "/",
  element: (
    <>
      <AuthGuard />
      <Outlet />
    </>
  ),
  children: [
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "test",
      element: <Test />,
    },
  ],
};

export default DashboardRoutes;
