import { Container, Form, Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import NavBar from "../BarraNavegacion/NavBar";

const FilledSearchResults = ( props ) => {
    return (
        <>
            <NavBar />
            <Container className="SearchPageContent" fluid>
                <Row>
                    <Col id="EmptyLeftColumn" sm={ 3 }></Col>
                    <Col id="SearchResultsColumn" sm={ 6 }>
                        <Container className="SearchResults">
                            <Container className="SearchResultsTitle">
                                <Form.Label>Resultados de Búsqueda</Form.Label>
                            </Container>
                            <Container className="SearchResultsPublicaciones">
                                <Form.Label>Publicaciones:</Form.Label>
                                <ListGroup id="PublicacionesList" as="ul">
                                    { props.publicaciones.map( ( publicacion, index ) => (
                                        <ListGroup.Item action href="http://localhost:3000/Home" as="li">
                                            <Container className="IconoPublicacion"></Container>
                                            <Container className="DetallesPublicacion">
                                                <Container className="TituloPublicacion">
                                                    <h4>{ publicacion.nombre_publicacion }</h4>
                                                </Container>
                                                <Container className="DetallesPublicacion">
                                                    { publicacion.descripcion }
                                                </Container>
                                            </Container>
                                        </ListGroup.Item>
                                    ) ) }
                                </ListGroup>
                            </Container>
                            <Container className="SearchResultsUsuario">
                                <Form.Label>Usuarios:</Form.Label>
                                <ListGroup id="UsuariosList">
                                    
                                </ListGroup>
                            </Container>
                        </Container>
                    </Col>
                    <Col id="EmptyRightColumn" sm={ 3 }></Col>
                </Row>
            </Container>
        </>
    );
};

FilledSearchResults.defaultProps = {
    publicaciones: [],
    usuarios: []
}

FilledSearchResults.propTypes = {
    publicaciones: PropTypes.array,
    usuarios: PropTypes.array
}

export default FilledSearchResults;