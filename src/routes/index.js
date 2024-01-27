import { useRoutes } from "react-router-dom";
import AuthRoutes from "./auth"
import DashboardRoutes from "./dashboard"
export default function BaseRoutes(){
    return useRoutes([
        AuthRoutes,
        DashboardRoutes,
        
    ])
}