import { useRoutes } from "react-router-dom";
import AuthRoutes from "./auth"
export default function BaseRoutes(){
    return useRoutes([
        AuthRoutes
    ])
}