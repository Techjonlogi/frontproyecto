import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import BasicButton from "../Botones/BasicButton";

const ModifyUserInformation = ( props ) => {
    if( props.id_usuario == localStorage.getItem( "KeyID" ) ) {
        return (
            <Container className="Capsula" id="ModifyContainer">
                <BasicButton buttonId="EditarButton" content="Editar Datos"/>
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