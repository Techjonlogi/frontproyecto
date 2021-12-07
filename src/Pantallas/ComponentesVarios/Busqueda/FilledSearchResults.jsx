import { Container, Form, Row, Col, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import NavBar from "../BarraNavegacion/NavBar";
import SearchResultsPublicaciones from "./SearchResultsPublicaciones";

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
                            <SearchResultsPublicaciones publicaciones={ props.publicaciones } />
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