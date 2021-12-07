import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Busqueda = () => {
    const [ items, setItems ] = useState( [] ); 
    const [ loadedItems, setLoaded ] = useState( false );

    useEffect( () => {
        await Api.get(
            
        ).then().catch()
    } )

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