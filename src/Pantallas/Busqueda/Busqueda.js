import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Busqueda = () => {
    return (
        <>
            <NavBar />
            <Container className="SearchPageContent" fluid>
                <Row>
                    <Col id="EmptyLeftColumn" sm={ 3 }></Col>
                    <Col id="SearchResultsColumn" sm={ 6 }>
                        <h1>Pagina de busqueda</h1>
                    </Col>
                    <Col id="EmptyRightColumn" sm={ 3 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default Busqueda;