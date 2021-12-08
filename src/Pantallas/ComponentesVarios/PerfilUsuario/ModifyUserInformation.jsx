import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import BasicButton from "./Botones/BasicButton";

const ModifyUserInformation = ( props ) => {
    if( props.id_usuario === localStorage.getItem( "KeyID" ) ) {
        return (
            <Container>
                <BasicButton content="Editar Datos"/>
            </Container>
        );
    }
};

ModifyUserInformation.defaultProps = {
    id_usuario: ''
}

ModifyUserInformation.propTypes = {
    id_usuario: PropTypes.number
}

export default ModifyUserInformation;