import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const auth = null;
    return auth ? <Outlet /> : <Navigate to="/Home" />;
};

export default PrivateRoute;