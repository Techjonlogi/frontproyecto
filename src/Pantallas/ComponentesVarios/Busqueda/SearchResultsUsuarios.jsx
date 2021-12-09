import { Container, ListGroup, Form, Row, Col, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import UserImage from "./UserImage";

const SearchResultsUsuarios = ( props ) => {
    return (
        <>
            <Container className="SearchResultsUsuario">
                <Form.Label>Usuarios:</Form.Label>
                <ListGroup id="UsuariosList" as="ul">
                    { props.usuarios.map( ( usuario, index ) => (
                        <ListGroup.Item key={ index } className="ListItem" as="li">
                            <Nav.Link className="ListLink" href="/Home">
                                <Row className="ListItemRow">
                                    <Col className="IconColumn" sm={ 2 }>
                                        <Container className="FotoPerfilUsuario">
                                            <UserImage fotoPerfil={ usuario.foto_perfil }/>
                                        </Container>
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