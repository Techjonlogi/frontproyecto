import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const DynamicNavBarLinks = ( props ) => {
    const logout = () => {
        localStorage.clear();
    };

    if( props.token === null || props.token === "" ) {
        return (
            <>
                <Nav className="LinkRow">
                    <Nav.Link className="NavigationLink" href="/Login">Login</Nav.Link>
                    <Nav.Link className="NavigationLink" href="/Register">Registro</Nav.Link>
                </Nav>
            </>
        );
    } else {
        return (
            <>
                <Nav className="LinkRow">
                    <Nav.Link className="NavigationLink" href={ `/Perfil/${ localStorage.getItem( "KeyID" ) }` }>Perfil</Nav.Link>
                    <Nav.Link className="NavigationLink" href="/Publicar">Publicar</Nav.Link>
                    <Nav.Link className="NavigationLink" href="/Home" onClick={ logout }>Cerrar Sesión</Nav.Link>
                </Nav>
            </>
        );
    }
};

DynamicNavBarLinks.defaultProps = {
    token: ""
}

DynamicNavBarLinks.propTypes = {
    token: PropTypes.string
}

export default DynamicNavBarLinks;