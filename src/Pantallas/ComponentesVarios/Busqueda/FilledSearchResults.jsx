import { Container, Form, Row, Col } from "react-bootstrap";
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
                            
                        </Container>
                    </Col>
                    <Col id="EmptyRightColumn" sm={ 3 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default FilledSearchResults;