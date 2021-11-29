import { Nav, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const DynamicNavBarLinks = ( props ) => {
    if( props.isLoggedIn == false )
    {
        return (
            <>
                <Nav className="LinkRow">
                    <Nav.Link className="NavigationLink" href="/Login">Login</Nav.Link>
                    <Nav.Link className="NavigationLink" href="/Register">Registro</Nav.Link>
                </Nav>
            </>
        );
    }
};

DynamicNavBarLinks.defaultProps = {
    isLoggedIn: false
}

DynamicNavBarLinks.propTypes = {
    isLoggedIn: PropTypes.bool
}

export default DynamicNavBarLinks;