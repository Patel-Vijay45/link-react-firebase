 
import AuthGuard from "../auth/AuthGuard.jsx";
import Dashboard from "../views/dashboard/Dashboard.jsx";
import Test from "../views/test/Test.jsx";
import { Outlet } from "react-router-dom"; 
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
