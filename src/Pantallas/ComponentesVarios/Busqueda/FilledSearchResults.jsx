import { Container, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import NavBar from "../BarraNavegacion/NavBar";
import SearchResultsPublicaciones from "./SearchResultsPublicaciones";
import SearchResultsUsuarios from "./SearchResultsUsuarios";

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
                                <Form.Label>RESULTADOS DE BÚSQUEDA</Form.Label>
                            </Container>
                            <SearchResultsPublicaciones publicaciones={ props.publicaciones } />
                            <SearchResultsUsuarios usuarios={ props.usuarios } />
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