import { Outlet, Navigate } from "react-router-dom";

const PublicRoute = () => {
    const isNotAuthorized = () => {
        if( localStorage.getItem( "Token" ) === null || localStorage.getItem( "Token" ) === "" ) {
          return true;
        }
        return false;
      };

    const notAuth = isNotAuthorized();
    return notAuth ? <Outlet /> : <Navigate to="/Home" />;
};

export default PublicRoute;