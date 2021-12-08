import { Container, ListGroup, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchResultsUsuarios = ( props ) => {
    return (
        <>
            <Container className="SearchResultsUsuario">
                <Form.Label>Usuarios:</Form.Label>
                <ListGroup id="UsuariosList" as="ul">
                    { props.usuarios.map( ( usuario, index ) => (
                        <ListGroup.Item className="ListItem" action href="http://localhost:3000/Home" as="li">
                            <Container className="FotoPerfilUsuario"></Container>
                            <Container className="DetallesUsuario">
                                <Container className="NombreUsuario">
                                    <h5>{ usuario.nombre_usuario }</h5>
                                </Container>
                            </Container>
                        </ListGroup.Item>
                    ) ) }
                </ListGroup>
            </Container>
        </>
    );
};

SearchResultsUsuarios.defaultProps = {
    usuarios: []
}

SearchResultsUsuarios.propTypes = {
    usuarios: PropTypes.array
}

export default SearchResultsUsuarios;