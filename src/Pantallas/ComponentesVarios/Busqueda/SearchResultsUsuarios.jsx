import { Container, ListGroup, Form, Row, Col, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchResultsUsuarios = ( props ) => {
    return (
        <>
            <Container className="SearchResultsUsuario">
                <Form.Label>Usuarios:</Form.Label>
                <ListGroup id="UsuariosList" as="ul">
                    { props.usuarios.map( ( usuario, index ) => (
                        <ListGroup.Item className="ListItem" as="li">
                            <Nav.Link className="ListLink" href="/Home">
                                <Row className="ListItemRow">
                                    <Col className="IconColumn" sm={ 2 }>
                                        <Container className="FotoPerfilUsuario"></Container>
                                    </Col>
                                    <Col className="DetailsColumn" sm={ 10 }>
                                        <Container className="DetallesUsuario">
                                            <Container className="NombreUsuario">
                                                <h5>{ usuario.nombre_usuario }</h5>
                                            </Container>
                                        </Container>
                                    </Col>
                                </Row>
                            </Nav.Link>
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