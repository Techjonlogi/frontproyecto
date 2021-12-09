import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
    const notAuth = null;
    return notAuth ? <Outlet /> : <Navigate to="/Home" />;
};

export default PublicRoute;