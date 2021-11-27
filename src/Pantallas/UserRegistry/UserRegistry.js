import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Container, Form, Row, Col } from "react-bootstrap";
import ImagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicFormEmail from "../ComponentesVarios/EntradaUsuario/BasicFormEmail";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormPassword from "../ComponentesVarios/EntradaUsuario/BasicFormPassword";
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
                        <BasicFormInput labelId="etiquetaNombres" label="" placeholder="Nombres" />
                        <BasicFormInput labelId="etiquetaApellidos" label="" placeholder="Apellidos" />
                        <BasicFormInput labelId="etiquetaNombreUsuario" label="" placeholder="Nombre de Usuario" />
                        <BasicFormEmail labelId="etiquetaEmail" label="" placeholder="Correo Electrónico"/>
                        <BasicFormPassword labelId="etiquetaContrasena" label="" placeholder="Contraseña"/>
                        <BasicButton buttonId="BotonRegistro" content="Crear Cuenta" />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserRegistry;