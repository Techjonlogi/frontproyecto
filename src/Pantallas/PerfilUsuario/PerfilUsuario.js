import 'bootstrap/dist/css/bootstrap.css';
import './PerfilUsuario.css';

import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import InformacionUsuario from '../ComponentesVarios/PerfilUsuario/InformacionUsuario';

const PerfilUsuario = () => {
    const [ usuario, setUsuario ] = useState( [] );
    const [ publicaciones, setPublicaciones ] = useState( [] );
    let { id_usuario } = useParams();

    useEffect( () => {
        async function sendUserInformationRequest() {
            await Api.get(
                Endpoints.usuarios + "/" + id_usuario,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    setUsuario( response.data );
                }
            } ).catch( ( e ) => {
                console.log( e.response.status );
                console.log( e.response.data );
            } );
        }

        async function sendUserPublicationRequest() {
            await Api.get(
                Endpoints.multimedia + "/" + id_usuario,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    setPublicaciones( response.data );
                }
            } ).catch( ( e ) => {
                console.log( e.response.status );
                console.log( e.response.data );
            } );
        }

        sendUserInformationRequest();
        sendUserPublicationRequest();
    }, [ id_usuario ] );

    return (
        <>
            { console.log( usuario ) }
            <NavBar />
            <Container className="PerfilContent" fluid>
                <Row className="BodyRow">
                    <Col id="EmptyLeftColumn" sm={ 2 }></Col>
                    <Col id="UserInfoColumn" sm={ 3 }>
                        <InformacionUsuario datos={ usuario }/>
                    </Col>
                    <Col id="UserPublicationsColumn" sm={ 5 }></Col>
                    <Col id="EmptyRightColumn" sm={ 2 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default PerfilUsuario;