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
import PublicacionesUsuario from "../ComponentesVarios/PerfilUsuario/PublicacionesUsuario";
import ModifyUserInformation from "../ComponentesVarios/PerfilUsuario/ModifyUserInformation";

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
                if( e.response.status === 404 ) {
                    alert( "No se encontró el usuario especificado." );
                }
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
                if( e.response.status != 404 ) {
                    alert( "Ocurrió un error con el servidor. Inténtelo más tarde." );
                }
            } );
        }

        sendUserInformationRequest();
        sendUserPublicationRequest();
    }, [ id_usuario ] );

    return (
        <>
            <NavBar />
            <Container className="PerfilContent" fluid>
                <Row className="BodyRow">
                    <Col id="EmptyLeftColumn" sm={ 2 }></Col>
                    <Col id="UserInfoColumn" sm={ 3 }>
                        <InformacionUsuario datos={ usuario }/>
                        <ModifyUserInformation id_usuario={ usuario.clave_usuario } />
                    </Col>
                    <Col id="UserPublicationsColumn" sm={ 5 }>
                        <PublicacionesUsuario publicaciones={ publicaciones }/>
                    </Col>
                    <Col id="EmptyRightColumn" sm={ 2 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default PerfilUsuario;