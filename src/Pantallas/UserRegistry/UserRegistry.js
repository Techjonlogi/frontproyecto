import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Container, Form, Row, Col, Button } from "react-bootstrap";
import ImagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicFormEmail from "../ComponentesVarios/EntradaUsuario/BasicFormEmail";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicButton from "../ComponentesVarios/Botones/BasicButton";

const UserRegistry = () => {
    return (
        <Container className="UserRegistryContent" fluid>
            <Row>
                <Col className="imageColumn">
                    <img src={ ImagenFondo } alt="" id="ImagenFondo" />
                </Col>
                <Col className="formColumn">
                    <Form id="UserInputForm">
                        <BasicFormInput labelId="etiquetaNombres" label="Nombres" placeholder="Introduce tus nombres" />
                        <BasicFormInput labelId="etiquetaApellidos" label="Apellidos" placeholder="Introduce tus apellidos" />
                        <BasicFormInput labelId="etiquetaNombreUsuario" label="Nombre de Usuario" placeholder="Introduce un nombre de usuario" />
                        <BasicFormEmail labelId="etiquetaEmail"/>
                        <BasicButton buttonId="BotonRegistro" content="Registrar" />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserRegistry;