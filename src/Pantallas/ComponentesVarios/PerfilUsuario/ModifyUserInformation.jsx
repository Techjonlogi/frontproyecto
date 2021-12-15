import { Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import BasicButton from "../Botones/BasicButton";

const ModifyUserInformation = ( props ) => {
    const redirect = () => {
        window.location.assign( "http://localhost:3000/Perfil/EditUserData" )
    }

    if( props.id_usuario == localStorage.getItem( "KeyID" ) ) {
        return (
            <Container className="Capsula" id="ModifyContainer">
                <BasicButton buttonId="EditarButton" content="Editar Datos" onClick={ redirect }/>
            </Container>
        );
    } else {
        return ( <></> );
    }
};

ModifyUserInformation.defaultProps = {
    id_usuario: 0
}

ModifyUserInformation.propTypes = {
    id_usuario: PropTypes.number
}

export default ModifyUserInformation;