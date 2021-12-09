import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const isAuthorized = () => {
        if( localStorage.getItem( "Token" ) === null || localStorage.getItem( "Token" ) === "" ) {
            return false;
        } else {
            return true;
        }
      };

    const auth = isAuthorized();
    console.log( auth );
    return auth ? <Outlet /> : <Navigate to="/Home" />;
};

export default PrivateRoute;