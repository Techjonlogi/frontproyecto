import { Container, Form, Row, Col } from "react-bootstrap";

const EmptySearchResults = () => {
    return (
        <>
            <NavBar />
            <Container className="SearchPageContent" fluid>
                <Row>
                    <Col id="EmptyLeftColumn" sm={ 3 }></Col>
                    <Col id="SearchResultsColumn" sm={ 6 }>
                        <Container className="SearchResults">
                            <Form.Group>
                                <Form.Label>No hubo resultados de la búsqueda.</Form.Label>
                            </Form.Group>
                        </Container>
                    </Col>
                    <Col id="EmptyRightColumn" sm={ 3 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default EmptySearchResults;