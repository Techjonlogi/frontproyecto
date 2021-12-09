import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ( { isAuth: isAuth, component: Component, ...rest } ) => {
    return (
        <Route { ...rest } render={ () => {
            if( isAuth ) {
                return <Component />;
            }
            return (
                <Redirect to={ { pathname: "/Home", state: { from: props.location } } }/>
            );
        } }></Route>
    );
};

export default ProtectedRoute;