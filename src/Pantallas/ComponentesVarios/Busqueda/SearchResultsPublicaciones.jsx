import { Container, ListGroup, Form, Row, Col, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchResultsPublicaciones = ( props ) => {
    return (
        <>
            <Container className="SearchResultsPublicaciones">
                <Form.Label>Publicaciones:</Form.Label>
                <ListGroup id="PublicacionesList" as="ul">
                    { props.publicaciones.map( ( publicacion, index ) => (
                        <ListGroup.Item className="ListItem" as="li">
                            <Nav.Link className="ListLink" href="/Home">
                                <Row className="ListItemRow">
                                    <Col className="IconColumn" sm={ 1 }>
                                        <Container className="IconoPublicacion">
                                            <img className="ItemImage" src={ publicacion.multimedia } alt="Imagen"></img>
                                        </Container>
                                    </Col>
                                    <Col className="DetailsColumn" sm={ 11 }>
                                        <Container className="DetallesPublicacion">
                                            <Container className="TituloPublicacion">
                                                <h5>{ publicacion.nombre_publicacion }</h5>
                                            </Container>
                                            <Container className="DetallesPublicacion">
                                                { publicacion.descripcion }
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

SearchResultsPublicaciones.defaultProps = {
    publicaciones: []
}

SearchResultsPublicaciones.propTypes = {
    publicaciones: PropTypes.array
}

export default SearchResultsPublicaciones;