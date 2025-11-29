import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth.routes";

export default function AppRoutes() {
    const routes = [authRoutes];

    const element = useRoutes(routes);
    return element;
}
