import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Busqueda = () => {
    const [ items, setItems ] = useState( [] ); 
    const [ loadedItems, setLoaded ] = useState( false );
    let { search_query } = useParams();

    useEffect( () => {
        await Api.get(
            Endpoints.search + "/" +  search_query,
            ConfigNoAuth
        ).then( ( response ) => {
            if( response.status === 200 ) {
                setItems( response.data );
                setLoaded( true );
            }
        } ).catch( ( e ) => {
            console.log( e.response.status );
            console.log( e.response.data );
        } );
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